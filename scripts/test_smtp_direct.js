const nodemailer = require('nodemailer');

// 填入你的配置
const config = {
    host: 'smtp.qq.com',
    port: 465,
    secure: true, 
    auth: {
        user: '2656344779@qq.com', 
        pass: 'wohfhxczqhfpeagd' 
    }
};

async function test() {
    console.log('Testing SMTP connection...');
    const transporter = nodemailer.createTransport(config);

    try {
        await transporter.verify();
        console.log('✅ Connection Successful!');
        
        const info = await transporter.sendMail({
            from: config.auth.user,
            to: 'liaojf2000@gmail.com',
            subject: 'SMTP Test from Node',
            text: 'If you see this, your QQ auth code is correct.'
        });
        console.log('✅ Email sent:', info.messageId);
    } catch (err) {
        console.error('❌ Connection failed:', err);
    }
}

test();
