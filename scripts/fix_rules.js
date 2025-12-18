const PocketBase = require('pocketbase/cjs');

const PB_URL = 'https://db.miaodemo.com'; 
const ADMIN_EMAIL = 'liaojf2000@gmail.com';
const ADMIN_PASS = 'Qwertyuiop418!';

const pb = new PocketBase(PB_URL);

async function fixRules() {
    try {
        console.log('🔌 Connecting...');
        await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
        
        console.log('🔍 Fetching "projects" collection...');
        const result = await pb.collections.getList(1, 1, { filter: 'name="projects"' });
        if (result.items.length === 0) throw new Error('Not found');
        
        const collection = result.items[0];
        
        console.log('🛠 Updating Rules...');
        // 显式重置所有规则
        collection.listRule = ""; // 公开可读
        collection.viewRule = "";
        collection.createRule = "@request.auth.id != ''";
        collection.updateRule = "@request.auth.id = author_id";
        collection.deleteRule = "@request.auth.id = author_id";
        
        await pb.collections.update(collection.id, collection);
        console.log('✅ Rules fixed.');

    } catch (e) {
        console.error('❌ Error:', e.message);
    }
}

fixRules();

