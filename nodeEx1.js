// for(i = 1; i<=5;i++){
//     setTimeout((x) => {
//         console.log(x);
//     }, i*100, i)
// }
// console.log('Printed Immediately')

// function repeat_function(callback, interval, endTime=-1){
//     const timerId = setInterval(callback, interval)
//     if(endTime !== -1)
//         setTimeout((x)=>{clearInterval(x)}, endTime, timerId)
// }
// repeat_function(() => {console.log('aaa')}, 1000, 4000)
// //repeat_function(() => {console.log('aaa')}, 1000)


function bbb(num){
    let a = []
    for(i=2; i<=num + 1; i++){
        if(i === 2)
            a.push(i)
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
            a.push(i)
        }
    }
    //console.log(a)
    console.log(`2에서 ${num}까지의 소수 갯수 : ${a.length}`)
}
console.time("1번")
bbb(10000000)
console.timeEnd("1번")


function aaa(num){
    let a = []
    for(i=2; i<=num; i++){
        if(i === 2)
            a.push(i)
        else if(i!==2 && i % 2===0)
            continue
        else{
            let count = 0
            for(let j of a){
                if(j > Math.sqrt(i))
                    break
                else{
                    if(i % j === 0){
                        count += 1
                        break
                    }
                }
            }
            if(count === 0)
                a.push(i)
        }
    }
    //console.log(a)
    console.log(`2에서 ${num}까지의 소수 갯수 : ${a.length}`)
}
console.time("2번")
aaa(10000000)
console.timeEnd("2번")