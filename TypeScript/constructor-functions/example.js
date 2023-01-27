console.log(this)
// Output: {}

let person = {
    name: 'John',
    age: 30,
    greet: function(){
        console.log(`this is ${this.name} and age is ${this.age}`)
    }
}
person.greet();

// give me an example of constructor functions
// Path: TypeScript\this-keyword\example.js
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`this is ${this.name} and age is ${this.age}`)
    }
}

let person1 = new Person('John', 30);
person1.greet();
