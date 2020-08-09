class Parent{
    constructor(){
        this.fatherName = "Mamun";
        this.motherNAme = "Dipa";
    }
} 

class Student extends Parent{
    constructor(id, name){
        super();
        this.id=id;
        this.name = name;
        
        this.school = "Niroboti manus der pashe darasse"
    }
}

const std1 =new Student(10,"MAhiya");
const std2 =new Student(20,"mahi");
console.log(std1,std2);