class Parent{
    bike(){
        console.log(`name of bike is duke`);
}
}

class Child extends Parent{

}

const obj = new Child()
obj.bike()


console.log(`_________________________________`);

baleno = {
    model: `hatch back`,
    manufacturer: 'maruti',
    varient : [`automatic`, `manual`]
}

glanza ={
    manufacturer:'Toyota'
}

glanza.__proto__ = baleno
console.log(glanza.model);
console.log(glanza.varient);

console.log(`_________________________________`);

// Multilevel Inheritance
class A{
    methoda(){
        console.log(`inside methoda function`);
    }
}
class B extends A{
    methodb(){
        console.log(`inside methodb function`);
    }
}
class C extends B{
    methodc(){
        console.log(`inside methodc function`);
    }
}

// object for class C

const obj1 = new C
obj1.methodc()
obj1.methoda()