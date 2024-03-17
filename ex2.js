// 두개의 변수 x,y와 함수 이름 f를 매개변수로 전달 받아, x와 y가 숫자일 경우에는 f(x,y)를 계산하여 return. 아니면 0 return 하는 함수 calculate(x,y,f)
function calculate1(x,y,f){
    if(typeof(x) != 'number' || typeof(y) != 'number'){
        return 0
    }
    else{
        return f(x,y)
    }
}
const add = (x,y) => x+y;
const subtract = (x,y) => {return x-y;}
const times = function(x,y){return x*y;}
function division(x,y){return x/y;}
console.log(calculate1(20, 10, add))
console.log(calculate1(20, 10, subtract))
console.log(calculate1(20, 10, times))
console.log(calculate1(20, 10, division))

// 일회용 패스워드 생성기를 이용하여 패스워드를 return 하는 프로그램을 작성해보자
function a(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let pw = ""
    for(i = 0; i< 6; i++){
        pw += alphabet[Math.floor(Math.random()*(alphabet.length))]
    }
    return pw
}
console.log(a())
console.log(a())
console.log(a())
console.log(a())

let arr = [1,2,3,4,5]
console.log(arr.findIndex(x => x % 2 === 0))