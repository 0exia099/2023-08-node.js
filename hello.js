// str을 n만큼 반복한 문자열 리턴
function solution1(str, n){
    return str.repeat(n)
}
console.log(solution1('aaa', 3))

// 문자열을 하나씩 세로로
function solution2(str){
    for(let i of str){
        console.log(i)
    }
}
solution2('abcde')

// 대문자는 소문자로, 소문자는 대문자로 바꾸어 리턴
function solution3(str){
    let answer = ""
    for(let i of str){
        if(i.toUpperCase() === i){
            answer += i.toLowerCase()
        }
        else if(i.toLowerCase()===i){
            answer += i.toUpperCase()
        }
    }
    return answer
}
console.log(solution3('aBcDe'))

// 숫자 두개를 붙였을때 큰수가 되는 수 리턴
function solution4(a, b){
    return Math.max(`${a}${b}`,`${b}${a}`)
}
console.log(solution4(12, 4))
console.log(solution4(52, 4))

// 정수 n이 양의 정수 x의 제곱이라면 x+1의 제곱 출력, 아니면 -1 출력
function solution5(n){
    let x = Math.floor(Math.sqrt(n))
    if(x ** 2 === n){
        return (x+1)**2
    }
    else{
        return -1
    }
}
console.log(solution5(121))
console.log(solution5(3))