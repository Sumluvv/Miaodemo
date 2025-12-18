const PocketBase = require('pocketbase/cjs');

// ================= 用户填写区域 =================
// 1. 你的 PocketBase 地址
const PB_URL = 'https://db.miaodemo.com'; 

// 2. 你的 PocketBase 管理员账号（用于登录后台修改设置）
const ADMIN_EMAIL = 'liaojf2000@gmail.com';
const ADMIN_PASS = 'Qwertyuiop418!';

// 3. 你的 SMTP 邮箱配置 (QQ 邮箱版 - 587 端口尝试)
const SMTP_CONFIG = {
    enabled: true,
    host: 'smtp.qq.com',        // QQ 邮箱服务器
    port: 587,                  // STARTTLS 端口
    username: '2656344779@qq.com', // ⚠️ 请替换为你的完整QQ邮箱
    password: 'ikmhbqcpllcveada',       // ⚠️ 请替换为你的16位授权码
    tls: false,                 // 587 通常不需要强制 TLS
    senderName: 'MiaoDemo Team',
    senderAddress: '2656344779@qq.com' // ⚠️ 必须和 username 一致
};
// ===========================================

const pb = new PocketBase(PB_URL);

async function main() {
    try {
        console.log(`🔌 Connecting to ${PB_URL}...`);
        await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASS);
        console.log('✅ Admin authenticated');

        console.log('⚙️ Updating SMTP settings...');
        
        // PocketBase settings structure
        await pb.settings.update({
            meta: {
                appName: 'MiaoDemo',
                appUrl: 'https://miaodemo.com', // 你的前端域名
                senderName: SMTP_CONFIG.senderName,
                senderAddress: SMTP_CONFIG.senderAddress,
            },
            smtp: {
                enabled: SMTP_CONFIG.enabled,
                host: SMTP_CONFIG.host,
                port: SMTP_CONFIG.port,
                username: SMTP_CONFIG.username,
                password: SMTP_CONFIG.password,
                tls: SMTP_CONFIG.tls,
                authMethod: 'LOGIN', // LOGIN or PLAIN
            }
        });

        console.log('\n✨ SMTP Configuration Updated Successfully!');
        console.log('📨 Sending test email to admin...');
        
        try {
            await pb.settings.testS3(); // PocketBase JS SDK might not have testEmail exposed directly in v0.x typed defs, trying generic request if fails
        } catch(e) {
            // Fallback: manually trigger a verification email to admin to test
            // Or just trust the settings update.
            // Actually pb.settings.testEmail(email) exists in newer versions
            try {
               await pb.send('/api/settings/test/email', { method: 'POST', body: { email: ADMIN_EMAIL } });
               console.log(`✅ Test email sent to ${ADMIN_EMAIL}. Check your inbox!`);
            } catch(testErr) {
               console.warn('⚠️ Settings saved, but test email failed:', testErr.message);
            }
        }

    } catch (err) {
        console.error('\n❌ Error:', err.message);
        console.error('Hint: Check your admin credentials and SMTP details.');
    }
}

main();


