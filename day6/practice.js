// const student = {
//     firstname : `Chandeler`,
//     Occupation : `Analyst`,

//     get occup(){
//         return this.Occupation
//     }
// }
// console.log(student.occup);

// const student = {
//     firstName: `Bobby`,
//     Gender: `Trans`,

//     set changeName(newName){
//         this.firstName = newName
//     }
//     ,set changeGender(newGender){
//         this.Gender = newGender
//     }

// }
// student.changeName = `Majnu`
// console.log(

//     student.firstName
// );
// student.changeGender = `Male`
// console.log(student.Gender);

const dog = {
    Name: `Rocky`
}

Object.defineProperty(dog,
    "getName",{
        get : function () {
            return this.Name
        }
    })

    Object.defineProperty(student, "changeName")

