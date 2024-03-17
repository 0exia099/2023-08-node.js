const { parentPort, workerData } = require('worker_threads');

function is_prime(n) {
    if (n <= 1 || n > 2 && n % 2 == 0)
        return false;
    if (n == 2)
        return true;
    for (let x = 3; x <= Math.floor(Math.sqrt(n)) + 1; x += 2)
        if (n % x == 0)
            return false;
    return true;
}

const data = workerData;
console.log(`Thread 시작: start = ${data.start}, end = ${data.end}`);
let count = 0;
for (let n = data.start; n <= data.end; n++)
    if (is_prime(n))
        count++;
console.log(`Thread 종료: start = ${data.start}, end = ${data.end}, 소수의 수 = ${count}`);
parentPort.postMessage(count);
