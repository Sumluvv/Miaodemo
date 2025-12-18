const PocketBase = require('pocketbase/cjs');

const PB_URL = 'https://db.miaodemo.com'; 
const ADMIN_EMAIL = 'liaojf2000@gmail.com';
const ADMIN_PASS = 'Qwertyuiop418!';

const pb = new PocketBase(PB_URL);

async function cleanUsers() {
    try {
        await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
        console.log('✅ Admin authenticated');

        const users = await pb.collection('users').getFullList();
        console.log(`Found ${users.length} users.`);

        for (const u of users) {
            console.log(`Deleting user: ${u.email}`);
            await pb.collection('users').delete(u.id);
        }
        console.log('✨ All users deleted.');

    } catch (e) {
        console.error(e);
    }
}

cleanUsers();

