console.log("Hello")
class Person {
    constructor(x){
        this.x = x;
    }
}


// let person = new Person("Micheal");
// console.log(person);



class methd {
    constructor(x,y){
        this.x = x
        this.y = y
    }
    doSum(){
        return this.x + this.y
    }
}


// let Methd = new methd(3,4)
// console.log(Methd.doSum())




class point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static findPoint(a,b){
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

let point1 = new point(22,8);
let point2 = new point(8,4); 
console.log(point.findPoint(point1,point2));





// class NewPoint{
//     constructor(x){
//         this.x = x
//     }

//     getData(){
//         return `ohhh, you just picked ${this.x}`
//     }
// }

// class OnPoint extends NewPoint{
//     constructor(x,y){
//         super(x)
//         this.y = y
//     }
// }

// let onPoint = new OnPoint("peter","paul")
// console.log(onPoint)