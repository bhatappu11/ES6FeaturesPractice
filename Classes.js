class Rectangle{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }

    area(){
        return this.l * this.b;
    }
}

class Square extends Rectangle {
    constructor (l) {
        super(l,l);
    }

    perimeter(){
        return 2 * (this.l+this.b);
    }
}

let obj = new Rectangle(2,3);
console.log(obj.area());

let obj2 = new Square(3);
console.log(obj2.area());
console.log(obj2.perimeter());