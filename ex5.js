function Circle(r){
    this.radius = r
}
Circle.prototype.area = function(){return Math.PI * (this.radius ** 2)}
Circle.prototype.perimeter = function(){return 2*Math.PI*this.radius}
const c1 = new Circle(10)
const c2 = new Circle(5)
console.log(c1)
console.log(c1.area())

class Circle1{
    constructor(r){
        this.radius = r
    }
    area(){return Math.PI * (this.radius ** 2)}
    perimeter(){return 2*Math.PI*this.radius}
    static PI(){return Math.PI}
}
circle1 = new Circle1(10)
circle2 = new Circle1(5)
console.log(circle1)
console.log(circle1.area())
console.log(Circle1.PI())