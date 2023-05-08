/*
1. Inheritance
2. Encapsulation
3. Abstraction
4. Polymorphism
*/

//1. Inheritance

class Car {
    constructor(brand,engine,gears){
        this.brand = brand;
        this.wheels = 4;
        this.engine = engine;
        this.brand = brand;
        this.gears = gears;
    }

   ShowDetails(){
    console.log(this.brand,this.engine)
   }
}


const c1 = new Car("TATA","BS6",6)
console.log(c1)

class suv extends Car{
    constructor(brand,engine,gears,color,type){
        super(brand,engine,gears,color,type)
        this.type = type;
        this.color = color;
    }
}

const c2 = new suv("mahindra","BS6",6,"black","Manual")
console.log(c2)
