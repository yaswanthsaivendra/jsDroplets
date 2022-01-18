//creating a class
class Person {
    //code goes here
}

const person1 = new Person()
console.log(person1)

// Every class consists of a builtin constructor function which allows us to create blueprint of the object.
// The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

class PersonClass {
    constructor(firstName, lastName){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person2 = new PersonClass()
console.log(person2)

const person3 = new PersonClass('yaswanth', 'vendra')
console.log(person3);

class PersonClass2 {
    constructor(firstName, lastName, nationality = 'Indian'){ //property with default value
        this.firstName = firstName
        this.lastName = lastName
        this.nationality = nationality
    }
}

const person4 = new PersonClass2('raja', 'vendra')  //use the default value for nationality.
console.log(person4)

const person5 = new PersonClass2('Anu', 'vendra', 'canadian')
console.log(person5)

//class methods

class PersonClass3 {
    constructor(firstName, lastName, nationality = 'Indian'){ //property with default value
        this.firstName = firstName
        this.lastName = lastName
        this.nationality = nationality
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person6 = new PersonClass3('yaswanth', 'vendra', 'canadian')
console.log(person6.getFullName());

//class Properties with some intial value

class PersonClass4 {
    constructor(firstName, lastName, nationality = 'Indian'){
        this.firstName = firstName
        this.lastName = lastName
        this.nationality = nationality
        //properties with intial value.
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
}

const person7 = new PersonClass4('yaswanth', 'vendra', 'canadian')
console.log(person7.score);
console.log(person7.skills);

//getter method
//get method allow us to access value from the object
//Instead of accessing properties directly from the object we use getter to get the value.

class PersonClass5 {
    constructor(firstName, lastName, nationality = 'Indian'){
        this.firstName = firstName
        this.lastName = lastName
        this.nationality = nationality
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const person8 = new PersonClass5('yaswanth', 'vendra', 'canadian')
console.log(person8.getScore);  //we do not need parenthesis to call a getter method.
console.log(person8.getSkills);


// setter method
//setter method allow us to modify the value of certain properties.
class PersonClass6 {
    constructor(firstName, lastName, nationality = 'Indian'){
        this.firstName = firstName
        this.lastName = lastName
        this.nationality = nationality
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }
}

const person9 = new PersonClass6('yaswanth', 'vendra', 'canadian')

person9.setScore = 1
person9.setSkill = 'HTML'
person9.setSkill = 'Python'
person9.setSkill = 'JS'
person9.setSkill = 'C#'

console.log(person9.getScore);
console.log(person9.getSkills);


// Static method
// Static methods are not called on instances of the class. Instead, they are called on the class itself.
//These are often utility functions, such as functions to create or clone objects.

class PersonClass7 {
    constructor(firstName, lastName, nationality = 'Indian'){
        this.firstName = firstName
        this.lastName = lastName
        this.nationality = nationality
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score){
        this.score += score
    }
    set setSkill(skill){
        this.skills.push(skill)
    }

    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
}

console.log(PersonClass7.favoriteSkill())


// Inheritance
//child class
class Student extends PersonClass7 {
    saySomething() {
        console.log("I am child of PersonClass7")
    }
}

const student1 = new Student('Yaswanth', 'Vendra')
console.log(student1.saySomething())
console.log(student1.getFullName())


//We can add properties to child class by using constructor function.
//We inherit parent properties of constructor function in child class by making use of super function in child class.
//super function instantiates the constructor in parent from child class.

class Student1 extends PersonClass7 {
    constructor(firstName, lastName, nationality, gender){
        super(firstName, lastName, nationality)
        this.gender = gender
    }
    saySomething() {
        console.log("I am child of PersonClass7")
    }
}

const student2 = new Student1('Neha', 'deekonda', 'Indonesian', 'Female')
console.log(student2.getFullName())

// We can override a parent method by using the same method name in child class.