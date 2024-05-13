
class Student{
    // studID
    // studName
    // studClass
    // studSub

    constructor(sID,sName,sClass,sSub){   /* Constuctor invokes automatically */
    this.studID = sID
    this.studName = sName
    this.studClass = sClass
    this.studSub = sSub
    this.display()
    }

    display(){
        console.log(`ID - ${this.studID}`);
        console.log(`Name = ${this.studName}`);
        console.log(`Class - ${this.studClass}`);
        console.log(`Subject - ${this.studSub}`);
    }
}

const obj = new Student(102,'Ashwin','A','Computer Science')
const obj1 = new Student(103,'Bimal','B','Bio Maths')
console.log(`Student Information is`);
// obj.display()
// obj1.display()
