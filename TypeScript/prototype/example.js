let person = {
    name: 'John',
    age: 30,

}
const usePrototype = true;

let behavior = {
    greet: function(){
        console.log(`this is ${this.name} and age is ${this.age}`)
    }
}

if (usePrototype){
    // Object.setPrototypeOf(person, behavior);
    person.__proto__ = behavior;
}


try {
    person.greet();
    
} catch (error) {
    console.error(`encountered an error --> : ${error}`);
}

