
const People = {
    getInfo : function(){
        return `${this.Name} is a ${this.Gender} and ${this.Age} years old.`
    }
}

//ES5 : Create Object v2
const people = Object.create(People);

people.Name = 'Juan';
people.Age = 30;
people.Gender = 'Male';


//ES5 : Create Object v3
const person = Object.create(People, {
    Name: {value: 'Josaphat Lozada'},
    Age: {value: 23},
    Gender: {value: 'Female'}
})

console.log(people)
console.log(person.getInfo())

/*************************************************************
 * 
 * ES 6 version for Object oriented programming !!IMPORTANT
 *
 * ***********************************************************/



// ES6 Constructor class method
class Job {
    constructor(Name, Age, Gender){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
    }

    getInfo(){
        return `${this.Name} is a ${this.Gender} and ${this.Age} years old.`
    }
}

class Employee extends Job{
    constructor(Name, Age, Gender, YearHired, Role){
        super(Name, Age, Gender)
        this.YearHired = YearHired;
        this.Role = Role;
    }

    info(YearHired){
        this.YearHired = YearHired
        this.hired = true;
    }
}


//Instantiate
const personWork = new Job('Daniel', 28, 'Male');
const employee = new Employee("Adazol", 25, 'Female', 2019)


console.log(personWork.getInfo())
employee.info(2023)
console.log(employee.getInfo())



//Destructor
const {Name, Age} = employee
console.log(Age);



