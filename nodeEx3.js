// const { Worker, isMainThread, parentPort } = require('worker_threads');
// if (isMainThread) { // Main thread
//     const worker = new Worker(__filename); // __filename == worker_thread.js
//     worker.on('message', message => console.log('from worker', message))
//     worker.on('exit', () => console.log('worker exit'))
//     worker.postMessage('ping')
// } else { // Worker thread
//     parentPort.on('message', (value) => {
//         console.log('from parent', value)
//         parentPort.postMessage('pong')
//         parentPort.close()
//     })
// }

// const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')
// if (isMainThread) { // Main thread
//     const threads = new Set()
//     threads.add(new Worker(__filename, { workerData: { start: 1 } }))
//     threads.add(new Worker(__filename, { workerData: { start: 2 } }))
//     for (let worker of threads) {
//         worker.on('message', message => console.log('from worker', message))
//         worker.on('exit', () => {
//             threads.delete(worker)
//             if (threads.size === 0) console.log('job done')
//         })
//     }
// } else {
//     // Worker thread
//     const data = workerData
//     parentPort.postMessage(data.start + 100)
// }

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

console.time("쓰레드로 찾기")
const threads = new Set()
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 1 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 1000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 2000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 3000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 4000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 5000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 6000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 7000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 8000001 } }))
threads.add(new Worker('./nodeEx3_worker.js', { workerData: { start: 9000001 } }))
let summery = 0
for (let worker of threads) {
    worker.on('message', message => {
        //console.log('from worker', message)
        summery += Number(message)
    })
    worker.on('exit', () => {
        threads.delete(worker)
        if (threads.size === 0) {
            console.log('job done')
            console.log("소수 갯수 :", summery)
            console.timeEnd("쓰레드로 찾기")
        }
    })
}