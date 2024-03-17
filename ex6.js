class Stack{
    constructor(){
        this.data = []
    }
    push(e) { this.data.push(e) }
    pop() { return this.data.length == 0 ? null:this.data.pop() }
    top() { return this.data.length == 0 ? null:this.data[this.data.length-1] }
    length() { return this.data.length }
}
S = new Stack();
S.push(1)
S.push(5)
S.push(3)
console.log(S.data)
console.log(S.length())
console.log(S.pop())
console.log(S.top())
console.log(S.pop())
console.log(S.pop())
console.log(S.pop())