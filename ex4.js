function Student(id, name, grade){
    this.id = id
    this.name = name
    this.grade = grade
    this.toString = function(){return `(${this.id}, ${this.name}, ${this.grade})`}
    this.toJSON = function(){return this.toString()}
}

const s1 = new Student(1003, '홍길동', 3.14)
const s2 = new Student(1001, '이순신', 3.87)
const s3 = new Student(1002, '김철수', 2.88)
let A = [s1, s2, s3]
console.log(JSON.stringify(A))
A.sort((x,y) => {
    return (x.name < y.name) ? -1 : ((x.name > y.name) ? 1 : 0)
})
console.log(JSON.stringify(A))
A.sort((x,y) => {
    return (x.grade < y.grade) ? 1 : ((x.grade > y.grade) ? -1 : 0)
})
console.log(JSON.stringify(A))