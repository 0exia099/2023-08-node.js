// f = function(x) { console.log('f', x + 2); }
// g = function(x) { console.log('g', x ** 2); }
// h = function(f1, f2) {
//     now = Date.now();
//     console.log(now);
//     if (now % 2 == 0)
//         f1(10);
//     else
//         f2(10);
// }

// h(f, g); // h(g, f)로 호출할 수도 있다.

// console.log('1');
// console.log('2');
// setTimeout(function() {console.log('3');}, 1000);
// console.log('4');

// setTimeout(function(){
//     const fs = require('fs');
//     console.log("readFile started");
//     fs.readFile('a.txt', 'utf8', function(err, data) {
//     //fs.readFile(__filename, 'utf8', function(err, data) {   // 현재 파일 이름 -> __filename
//         if (err) console.error(err);
//         else{
//             console.log(data);
//             console.log("readFile completed");
//         }
//     });
// }, 1300)

// const fs = require('fs'); function readSketchyFile() {
//     try {
//         fs.readFile('does_not_exist.txt', function (err, data) {
//             if (err){
//                 throw err; // err 오류는 catch되지 않고, 여기에서 실행 중단. 왜?
//                 // 메인 쓰레드 시점에서는 readFile 함수가 실행되는동안 try catch가 끝남.
//                 // 이로 인하여 콜백 함수가 실행될때는 try catch가 없음
//             }
//         });
//     } catch (err) {
//         console.log('warning: minor issue occurred, program continuing');
//     }
// } readSketchyFile();

// const fs = require('fs').promises;
// function readSketchyFile() {
//     fs.readFile('does_not_exist.txt')
//     .then((t)=>{console.log(t.toString())})
//     .catch((err) => { console.log('warning: minor issue occurred, program continuing'); })
// }
// readSketchyFile();

// async function foo() {
//     const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
//     const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
//     const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));
//     console.log('foo')
//     console.log([a, b, c]); // [1, 2, 3] 
// }
// foo() // 6초 거림

// async function foo1() {
//     const res = await Promise.all([
//         new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//         new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//         new Promise(resolve => setTimeout(() => resolve(3), 1000))
//     ]);
//     console.log('foo1')
//     console.log(res); // [1, 2, 3]
// }
// foo1(); // 이 함수의 실행 시간 = 3초

// function foo(sec, str){
//     console.log("시작")
//     setTimeout(function(){console.log(str)},sec*1000, str)
// }
// foo(2, "2초가 지났습니다.")

// function foo(a, b){ 
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             const sum = a + b
//             if (sum % 2 === 0) resolve(`Success: ${sum}`);
//             else reject(new Error(sum));
//         },2000)
//     })
// }
// foo(10,20)
// .then(msg => console.log(msg))
// .catch(msg => console.error(msg))
// foo(10,21)
// .then(msg => console.log(msg))
// .catch(msg => console.error(msg))

// function http_get(url){
//     fetch(url)
//         .then(response => response.json())
//         .then(myJson => console.log(myJson))
//         .catch(msg => console.error(msg))
// }
// http_get('https://jsonplaceholder.typicode.com/todos/1')
// http_get('https://non-server.typicode.com/todo/1')

// function parallel_fetches(urls){
//     return Promise.all(urls.map(url => {
//         return new Promise((resolve, reject)=>{
//             fetch(url)
//             .then(response => response.json())
//             .then(myJson => resolve(myJson))
//             .catch(err => reject(new Error(err)))
//         })
//     }))
// }
// const urls = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/todos/3'
// ]
// parallel_fetches(urls)
// .then(contents => console.log('Downloaded contents: ', contents))
// .catch(error => console.error(error))

function add(x,y){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(`1초 후: ${x} + ${y} = ${x+y}`)
            resolve()
        }, 1000)
    })
}
function subtract(x,y){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(`2초 후: ${x} - ${y} = ${x-y}`)
        }, 2000)
    })
}
function times(x,y){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(`1.5초 후: ${x} * ${y} = ${x*y}`)
        }, 1500)
    })
}
async function calculate(x,y){
    try{
        await add(x,y);
        const msg = await subtract(x,y)
        console.log(msg)
        console.log(await times(x,y))
    } catch(err){
        console.log('Error: ', err.message)
    }
}
calculate(10,20)