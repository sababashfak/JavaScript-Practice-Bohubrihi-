// Class (ES6)
// Class is a template for creating objects

class Person {
    constructor(fname,lname,bday){
        this.firstname = fname;
        this.lastname = lname;
        this.dob = bday;
    }

    cAge(){
        let birthday = new Date(this.dob);
        let diff = Date.now()-birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }

    fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
}

let person1 = new Person("Sabab","Ashfak","26-10-2002");
let person2 = new Person("Sabab","Ashfak","26-10-1999");
let person3 = new Person("Bushra","Sarker","03-12-2001");

console.log(person1);
console.log(person2);
console.log(person3.cAge());
console.log(person2.fullname());


// Sub Classes  *************************************************************************************************************************************************************
// Inheritance


class Person1 {     // Base Class
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting(){
        return `Hello ${this.firstname} ${this.lastname}`;
    }

}
class Customer extends Person1{  // Sub Class
    constructor(fname, lname, phone, memberShip){
        super(fname, lname);  //**********
        this.phone = phone;
        this.memberShip = memberShip;
    }

    fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
}

let person4 = new Person1("Mahin", "Sarker");
console.log(person4);

let customer1 = new Customer("Shahriar", "Zaman", "01790862914", "2031590642");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname());


// Static Function

class Person2 {     
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting(){
        return `Hello ${this.firstname} ${this.lastname}`;
    }

    static testStatic(){
        return `This is static function`;
    }

}

let person5 = new Person2("Alif", "Islam");

console.log(person5.greeting());
console.log(Person2.testStatic());  // person5.testStatic() will be error. because testStatic() is a static function.

