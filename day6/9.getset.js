// The first argument is the objectName.
// The second argument is the name of the property.
// The third argument is an object that describes the property.


const student = {
    firstName: 'Monica'
}



// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
