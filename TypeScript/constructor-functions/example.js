// give a simple js example of using constructor functions
// to create objects
//
// create a new object using the Object constructor function
// and assign it to a variable
var obj = new Object();
// add a property to the object
obj.name = "John";
// add a method to the object
obj.greet = function() {
    console.log("Hello, my name is " + this.name);
}
// call the method
obj.greet();
// create a new object using the Object constructor function
// and assign it to a variable
var obj2 = new Object();
// add a property to the object
obj2.name = "Jane";
// add a method to the object
obj2.greet = function() {
    console.log("Hello, my name is " + this.name);
}
// call the method
obj2.greet();
// create a new object using the Object constructor function
// and assign it to a variable
var obj3 = new Object();