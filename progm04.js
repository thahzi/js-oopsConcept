// Polymorphism - Javascript does not support method overloading
console.log(`______Method overloading____`);

class A{
    methoda(){
        console.log(`inside first method`);
    }

    methoda(n){
        this.n1 = n
        console.log(`inside the methoda argument ${this.n1}`);
    }

    methoda(n,m){
        this.n1 = n
        console.log(`inside the methoda argument ${this.n1} and ${m}`);
    }
}

const obj = new A()
obj.methoda()
obj.methoda(5,10)

console.log(`______Rest Operator - get method overloading_______`);
// Rest Operator - returns arguments as array

class D{
    methodd(...arg){
        console.log(arg);
        console.log(arg.reduce((n1,n2)=>n1+n2,0));
    }
}

const obj2 = new D()
obj2.methodd(1,2,3,4,5)
console.log(`_________Method Overloading___________`);

// Method Overloading

class E{
    methode(){
        console.log(`Inside the first method`);
    }
}

class F extends E{
    methode(){
        console.log(`Inside the second method`);
    }

    methode(){
        console.log(`Inside the third method`);
    }
}

const obj3 = new F()
obj3.methode()

console.log(`___________________________________`);