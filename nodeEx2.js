const crypto = require('crypto');
const algorithm = 'aes-256-cbc';

const key = crypto.createHash('sha256').update('@Hello World@').digest('base64').slice(0,32);
const iv = '1234567890123456';
console.log("key =", key)

function encrypt(message, key, iv){
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    let result = cipher.update(message, 'utf8', 'base64')
    result += cipher.final('base64');
    return result
}
function decrypt(message, key, iv){
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    let result = decipher.update(message, 'base64', 'utf8')
    result += decipher.final('utf8')
    return result
}

const enc_text = encrypt('오늘은 8월 15일 광복절 입니다...', key, iv)
const plain_text = decrypt(enc_text,key,iv)

console.log("암호문 :", enc_text)
console.log("평문 :", plain_text)