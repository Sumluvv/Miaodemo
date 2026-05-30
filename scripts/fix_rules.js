/**
 * 修复 PocketBase 集合权限规则（隐私 + 点赞 + 广场列表）
 * 运行: node scripts/fix_rules.js
 * 凭证: 环境变量 PB_ADMIN_EMAIL / PB_ADMIN_PASS，或 scripts/.env（勿提交 Git）
 */
const fs = require('fs');
const path = require('path');
const PocketBase = require('pocketbase/cjs');

const PB_URL = process.env.PB_URL || 'https://db.miaodemo.com';

function loadEnvFile() {
    const envPath = path.join(__dirname, '.env');
    if (!fs.existsSync(envPath)) return;
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
        const t = line.trim();
        if (!t || t.startsWith('#')) continue;
        const i = t.indexOf('=');
        if (i === -1) continue;
        const key = t.slice(0, i).trim();
        const val = t.slice(i + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) process.env[key] = val;
    }
}

loadEnvFile();

const ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL;
const ADMIN_PASS = process.env.PB_ADMIN_PASS;

const pb = new PocketBase(PB_URL);

const PROJECT_LIST_VIEW =
    'is_public = true || (@request.auth.id != "" && author_id = @request.auth.id)';

async function getCollection(name) {
    const result = await pb.collections.getList(1, 1, { filter: `name="${name}"` });
    if (!result.items.length) return null;
    return result.items[0];
}

async function ensureProjectLikesCollection(projectsId) {
    const existing = await getCollection('project_likes');
    if (existing) {
        console.log('ℹ️ Collection "project_likes" already exists.');
        return;
    }

    console.log('🛠 Creating "project_likes" collection...');
    await pb.collections.create({
        name: 'project_likes',
        type: 'base',
        fields: [
            {
                name: 'project',
                type: 'relation',
                required: true,
                collectionId: projectsId,
                cascadeDelete: true,
                maxSelect: 1,
            },
            {
                name: 'user',
                type: 'relation',
                required: true,
                collectionId: '_pb_users_auth_',
                cascadeDelete: true,
                maxSelect: 1,
            },
        ],
        listRule: '',
        viewRule: '',
        createRule: '@request.auth.id != ""',
        updateRule: null,
        deleteRule: '@request.auth.id = user',
    });
    console.log('✅ Collection "project_likes" created.');
}

async function fixProjectsRules() {
    const collection = await getCollection('projects');
    if (!collection) throw new Error('Collection "projects" not found');

    collection.listRule = PROJECT_LIST_VIEW;
    collection.viewRule = PROJECT_LIST_VIEW;
    collection.createRule = '@request.auth.id != ""';
    collection.updateRule = '@request.auth.id = author_id';
    collection.deleteRule = '@request.auth.id = author_id';

    await pb.collections.update(collection.id, collection);
    console.log('✅ projects rules updated.');

    await ensureProjectLikesCollection(collection.id);
}

async function fixUsersRules() {
    const collection = await getCollection('users');
    if (!collection) {
        console.log('ℹ️ users collection not found (skip).');
        return;
    }
    collection.listRule = null;
    collection.viewRule = 'id != ""';
    await pb.collections.update(collection.id, collection);
    console.log('✅ users rules updated (no public list).');
}

async function main() {
    if (!ADMIN_EMAIL || !ADMIN_PASS) {
        console.error(
            '❌ Set PB_ADMIN_EMAIL and PB_ADMIN_PASS (env or scripts/.env) then re-run.'
        );
        process.exit(1);
    }
    try {
        console.log(`🔌 Connecting to ${PB_URL}...`);
        await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
        await fixProjectsRules();
        await fixUsersRules();
        console.log('\n🎉 Done. Re-test view.html plaza and private project links.');
    } catch (e) {
        console.error('❌ Error:', e.message || e);
        if (e?.response) console.error(JSON.stringify(e.response, null, 2));
        process.exit(1);
    }
}

main();
