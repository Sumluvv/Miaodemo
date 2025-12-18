const PocketBase = require('pocketbase/cjs');

const PB_URL = 'https://db.miaodemo.com'; 
const ADMIN_EMAIL = 'liaojf2000@gmail.com';
const ADMIN_PASS = 'Qwertyuiop418!';

const pb = new PocketBase(PB_URL);

async function addChatField() {
    try {
        console.log('🔌 Connecting...');
        await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
        
        console.log('🔍 Fetching "projects" schema...');
        // SDK v0.x use getFirstListItem for name lookup on base collections? 
        // Actually collections are manageable via pb.collections which operates on _collections internal collection.
        // But pb.collections.getByName was removed/changed.
        // Let's use getFirstListItem on the system collection if possible, or iterate.
        // Wait, standard usage is pb.collections.getOne(id_or_name) in recent versions.
        // Let's try getFirstListItem from the collections endpoint.
        
        const result = await pb.collections.getList(1, 1, { filter: 'name="projects"' });
        if (result.items.length === 0) throw new Error('Collection projects not found');
        const collection = result.items[0];
        console.log('Collection Structure:', JSON.stringify(collection, null, 2)); // Debug log

        // 检查字段是否存在
        const hasField = (collection.fields || []).find(f => f.name === 'chat_history'); // Use fields
        if (hasField) {
            console.log('ℹ️ Field "chat_history" already exists.');
            return;
        }

        console.log('🛠 Adding "chat_history" field (JSON)...');
        collection.fields.push({
            name: 'chat_history',
            type: 'json',
            required: false,
            system: false,
            hidden: false
        });

        await pb.collections.update(collection.id, collection);
        console.log('✅ Schema updated successfully.');

    } catch (e) {
        console.error('❌ Error:', e.message);
    }
}

addChatField();

