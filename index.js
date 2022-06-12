//Object Literals

// const people = {
//     Name: "Danyel", 
//     Age: 25,
//     Gender: 'Male'
// }

// console.log(Object.keys(people))

//ES5 Contructor function method
function People(Name, Age, Gender){
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;

    // this.getInfo = function(){
    //      return `${this.Name} is a ${this.Gender} and ${this.Age} years old.`
    // }
}
//instanciate new object from contructor
const people = new People('Danyel',26,'Male')

//Create a prototype
People.prototype.getInfo = function(){
    return `${this.Name} is a ${this.Gender} and ${this.Age} years old.`
}
People.prototype.getAge = function(){
    return `${this.Name} is ${this.Age} years old.`
}


//inheritance

function Student(Name, Age, Gender, Year, Grade){

    People.call(this, Name, Age, Gender);
    this.Year = Year;
    this.Grade = Grade;
}

Student.prototype = Object.create(People.prototype)

Student.prototype.enroll = function (Year){
    this.Year = Year;
    this.enrolled = true;
}

const student = new Student('Josaphat', 21, 'Female', 2022, 'Grade 12')




console.log(student.getAge())
// console.log(student)
// student.enroll(2023)
// console.log(student)