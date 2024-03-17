class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    toString(){return `(${this.x},${this.y})`}
}
class Point3D extends Point{
    constructor(x,y,z){
        super(x,y)
        this.z = z
    }
    toString(){return `(${this.x},${this.y},${this.z})`}
    toJSON(){return this.toString()}
    getsize(){return this.x**2 + this.y**2 + this.z**2}
}
p1 = new Point(20,30)
console.log(String(p1))
p2 = new Point3D(20,30,40)
console.log(String(p2))

a = [new Point3D(10,20,30), new Point3D(30,20,30),new Point3D(10,30,30),new Point3D(10,40,30),]
a.sort((x,y)=>{
    return (x.getsize() < y.getsize()) ? 1 : ((x.getsize() > y.getsize()) ? -1:0)
})
console.log("\n")
//a.forEach(x => console.log(String(x)))
console.log(JSON.stringify(a))