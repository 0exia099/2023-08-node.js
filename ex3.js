function freq(str){
    let a = {}
    for(let i of str){
        a[i] = (i in a) ? a[i] + 1 : 1
    }
    console.log(a)
    console.log(Object.keys(a).reduce((x,y) => (a[x] > a[y]) ? x : y))
}
freq("uuauugcuucuccuacugkkkkkkkkkkkkkkkkk")