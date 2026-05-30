const PocketBase = require('pocketbase/cjs');

// ================= 配置区域 =================
// 1. 替换为你的 PocketBase 地址（本地调试可用 http://localhost:8090）
const PB_URL = 'https://db.miaodemo.com'; 

// 2. 设置你的管理员账号（首次启动 PocketBase 时设置的，或在 Coolify logs 中查看）
const ADMIN_EMAIL = 'liaojf2000@gmail.com';
const ADMIN_PASS = 'Qwertyuiop418!';
// ===========================================

const pb = new PocketBase(PB_URL);

async function main() {
    try {
        console.log(`🔌 Connecting to ${PB_URL}...`);
        await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
        console.log('✅ Admin authenticated');

        // --- 1. Projects Collection ---
        try {
            await pb.collections.getFirstListItem('name="projects"');
            console.log('ℹ️ Collection "projects" already exists.');
        } catch (e) {
            console.log('🛠 Creating "projects" collection...');
            await pb.collections.create({
                name: 'projects',
                type: 'base',
                schema: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'text' },
                    { name: 'code_html', type: 'text' }, // 存储完整的 HTML 代码
                    { name: 'author_id', type: 'relation', collectionId: 'users', cascadeDelete: false },
                    { name: 'is_public', type: 'bool' },
                    { name: 'likes', type: 'number', required: false },
                    { name: 'thumbnail', type: 'file', options: { mimeTypes: ['image/png', 'image/jpeg'] } }
                ],
                listRule: 'is_public = true || (@request.auth.id != "" && author_id = @request.auth.id)',
                viewRule: 'is_public = true || (@request.auth.id != "" && author_id = @request.auth.id)',
                createRule: "@request.auth.id != ''",
                updateRule: "@request.auth.id = author_id",
                deleteRule: "@request.auth.id = author_id",
            });
            console.log('✅ Collection "projects" created.');
        }

        // --- 2. Versions Collection (History) ---
        try {
            await pb.collections.getFirstListItem('name="versions"');
            console.log('ℹ️ Collection "versions" already exists.');
        } catch (e) {
            console.log('🛠 Creating "versions" collection...');
            await pb.collections.create({
                name: 'versions',
                type: 'base',
                schema: [
                    { name: 'project_id', type: 'relation', collectionId: 'projects', required: true, cascadeDelete: true },
                    { name: 'code_snapshot', type: 'text' },
                    { name: 'commit_message', type: 'text' },
                    { name: 'assets_meta', type: 'json' } // 存储关联的资源信息
                ],
                listRule: "@request.auth.id != ''",
                viewRule: "@request.auth.id != ''",
                createRule: "@request.auth.id != ''",
                updateRule: null, // 版本不可修改
                deleteRule: "@request.auth.id != ''", // 允许删除自己的历史
            });
            console.log('✅ Collection "versions" created.');
        }

        // --- 3. Assets Collection (Images/Files) ---
        try {
            await pb.collections.getFirstListItem('name="assets"');
            console.log('ℹ️ Collection "assets" already exists.');
        } catch (e) {
            console.log('🛠 Creating "assets" collection...');
            await pb.collections.create({
                name: 'assets',
                type: 'base',
                schema: [
                    { name: 'owner', type: 'relation', collectionId: 'users', required: true },
                    { name: 'project_id', type: 'relation', collectionId: 'projects' },
                    { name: 'file', type: 'file', options: { mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg+xml'], maxSize: 5242880 } }
                ],
                listRule: "", // 公开读取以便在网页中展示
                viewRule: "",
                createRule: "@request.auth.id != ''",
                updateRule: "@request.auth.id = owner",
                deleteRule: "@request.auth.id = owner",
            });
            console.log('✅ Collection "assets" created.');
        }

        console.log('\n✨ All systems go! PocketBase is ready for MiaoDemo.');

        // --- 4. Update Auth Settings (Disable Email Verification for now) ---
        console.log('⚙️ Updating Auth Settings...');
        const authSettings = await pb.settings.getAll();
        const newAuthSettings = {
            ...authSettings,
            meta: { ...authSettings.meta, appUrl: 'https://db.miaodemo.com' }, // 指向后端地址，确保验证页能打开
            emailAuth: {
                ...authSettings.emailAuth,
                enabled: true,
                requireVerification: true // ✅ 开启邮箱验证
            }
        };
        await pb.settings.update(newAuthSettings);
        console.log('✅ Auth settings updated: Email Verification ENABLED.');
        
    } catch (err) {
        console.error('\n❌ Error:', err.message);
        console.error('Hint: Make sure PocketBase is running and Admin credentials are correct.');
    }
}

main();

