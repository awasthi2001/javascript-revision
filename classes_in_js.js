/*
Classes are syntactical sugar over the existing object oriented model in javascript . This means that it does not introduced any new Features
improves upon old features.

They are similar to function constructors that we already know but give you much more functionality with less code.
JavaScript Classes are templates for JavaScript Objects.
So, if want to create multiple objects having similar properties than we can use classes.
The 'constructor' is a special function for initializing objects created with class . They work similar to function Constructors

They also support simple instance methods/functions with short declaration syntax.

*/
//For Example :- If we want to create a rectangle than we can make a class and using that class we can as many rectangles as we want.


class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    /* lets if we want to create area of this rectangles we will write a method for it */
   area(){
    return this.height*this.width;
   }
}


let box = new Rectangle(5,10);
console.log(box.area());//it will calculate the area of the rectangle

/*
Class also support inheritance  which means they can take properties and functions from other classes
For example :- we have two classes person and teacher
*/

class Person{
    constructor(name, age,city,address){
        this.name = name;
        this.age = age;
        this.city = city;
        this.address = address;
    }
    
    // if want to print the introduction of the person 
    intro(){
        console.log(`Hii my name is ${this.name} and my age is ${this.age} and i live in ${this.city}`)
    }
}
//let's say we want to inherit properties from person because teacher is also a person .
/*
We can use extends keyword to make 'teacher' a child of 'person' . This will allow us to inherit properties and methods from 'person'
Also what if you want to declare a constructor for our child class then it is important to note that when used in a constructor
the super keyword appeard alone and must be used before this keyword is used.
*/

class Teacher extends Person{
 constructor(name,age,city,address,subject){
    super(name,age,city,address)
    this.subject = subject
}
}


let teacher1 = new Teacher('suneel',25,'bijawar','bijawar','chemistry')
console.log(teacher1)
teacher1.intro()