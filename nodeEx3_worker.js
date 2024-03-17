const { parentPort, workerData } = require('worker_threads')
function bbb(start, num){
    let result = 0
    for(i=start; i<=num + 1; i++){
        if(i<2)
            continue
        else if(i === 2)
            result += 1
        else if(i!==2 && i % 2===0)
            continue
        else{
            let count = 0
            for(j=3;j<= Math.sqrt(i)+1; j+=2){
                if (i % j == 0){
                    count += 1
                    break
                }
            }
            if(count === 0)
            result += 1
        }
    }
    //console.log(a)
    //console.log(`2에서 ${num}까지의 소수 갯수 : ${a.length}`)
    return result
}
const data = workerData
parentPort.postMessage(bbb(data.start, data.start + 999999))