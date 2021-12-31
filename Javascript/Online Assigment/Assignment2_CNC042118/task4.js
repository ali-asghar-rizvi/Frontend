//Write a program to take input the marks obtained in three subjects 
var math = Number(prompt("Enter Math Marks"));
var physics = Number(prompt("Enter Physics Marks"));
var chemistry = Number(prompt("Enter Chemistry Marks"));
// total marks
var totalMark = 300;

//Compute & show the resulting percentage on your page
var obtainedMark = Number(math+physics+chemistry);
var percentage = obtainedMark/totalMark*100; 
//Show the total marks, marks obtained, percentage, grade & remarks
document.write("<h1>Mark Sheet</h1>");
document.write( "Total Mark" +"  "+totalMark +"</br>"); 
document.write( "Obtained Mark" +"  "+obtainedMark  +"</br>");
document.write( "Percentage" +"  "+percentage +"%" +"</br>" );

//Take percentage & compute grade as per following table:
if (percentage >= 80 &&  percentage <= 100){
    document.write("Grade: A-One </br>");
    document.write("Remark: You Are Done a Excellent Job")
}
else if (percentage >= 70 &&  percentage <= 79){
    document.write("Grade: A </br>");
    document.write("Remark: You Are Done a Nice Job")
}
else if (percentage >= 60 &&  percentage <= 69){
    document.write("Grade: B </br>");
    document.write("Remark: You Are Done a Good Job")
}
else if (percentage >= 33 &&  percentage <= 59){
    document.write("Grade: C </br>");
    document.write("Remark: You Need to Improvement")
}
else {
    document.write("Remark: Fail")
}