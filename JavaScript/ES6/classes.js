
class info {
    constructor(name,rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }       
}

let student = new info("Ahsan", 20);

document.getElementById("root").innerHTML =  student.name + student.rollNumber ;
