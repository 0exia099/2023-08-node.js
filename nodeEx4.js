// const fs = require('fs')

// const wstream = fs.createWriteStream('./big.txt')
// const sentence = "1234567890\n".repeat(100);
// for(let x = 0; x < 100000; x++){
//     wstream.write(sentence)
// }
// wstream.end()

// const fs = require('fs').promises
// const process = require('process')
// console.log("시작전 메모리 사용량 :", process.memoryUsage.rss())
// fs.readFile('./big.txt')
//     .then((data) => {
//         fs.writeFile('./big2.txt', data)
//     })
//     .then(() => {console.log("종료후 메모리 사용량 :", process.memoryUsage.rss())})

const fs = require('fs')
const process = require('process')
console.log("시작전 메모리 사용량 :", process.memoryUsage.rss())
const readStream = fs.createReadStream('big.txt')
const writeStream = fs.createWriteStream('big3.txt')
readStream.pipe(writeStream)
console.log("종료후 메모리 사용량 :", process.memoryUsage.rss())