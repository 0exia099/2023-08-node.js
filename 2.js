const { Worker, workerData } = require('worker_threads');

console.time("시간측정");
const threads = new Set();
const limit = 10000000;
const amount = Math.floor(limit / 8);

for (let x = 0; x < 8; x++) {
    let start = x * amount;
    let end = (x < 7) ? (x + 1) * amount : limit;
    threads.add(new Worker("./worker.js", { workerData : {start, end} }));
}

let count = 0;
for (let worker of threads) {
    worker.on('message', data => {count += Number(data)});
    worker.on('exit', () => {
    	threads.delete(worker);
    	if (threads.size === 0) {
            console.log('2부터 10000000까지 소수의 수 =', count);
            console.timeEnd("시간측정");
        }
    });
}