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


//Encapsulation (Data hiding)

class User {
    #name;
    #score;
    constructor(name,score){
        this.#name = name
        this.#score = score
    }
    //getter
    get userName(){
        return this.#name;
    }
    get userScore(){
        return this.#score;
    }
    //setter
    set userScore(newScore){
      this.#score = newScore;
    }
}


const user1 = new User("ak",10)
console.log(user1.userName)
user1.userScore = 20
console.log(user1.userScore)


//Abstraction (Data Protection)
 
class User2{
    constructor(){
        if(this.constructor===User2){
            throw new Error("Object of Abstract class cannot be created")
        }
    }
    run(){
        console.log("He is running")
    }
    walk(){
        console.log("He is walking")
    }
}

//let user5 = new User2();

// we will use inheritance to use the properties of the  abstract class

class Manager extends User2{
    constructor(){
        super()
    }
}

let manager = new Manager();
manager.run()


//Polymerphism (Many Forms)

class firstClass {
    add() {
        console.log("First Method")
    }
}
class secondClass extends firstClass {
    add() {
        console.log(30 + 40);
    }
}
class thirdClass extends secondClass {
    add() {
        console.log("Last Method")
    }
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();
//The Code above shows how to implement inheritance polymorphism in JavaScript. In this code, we have a class and in this class, we have the “add” method, and we inherit this class in the Second Class. We create different classes with the same method name and different definitions of methods. This example shows us the same method will perform different operations depending on the object upon which it is called.

