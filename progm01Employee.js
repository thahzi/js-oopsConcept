class Employee{
    // Property 
    empName
    empDesign
    empLocation
    empSalary

    // Constructor
    constructor(ename,eDesgn,empLo,empSal){
        this.empName = ename
        this.empDesign = eDesgn
        this.empLocation = empLo
        this.empSalary = empSal

    }

    // method
    display(){
        console.log(`employee name is ${this.empName}`);
    }
}

const obj = new Employee('Ashwin',`Developer`,`kochi`,30000)
obj.display()