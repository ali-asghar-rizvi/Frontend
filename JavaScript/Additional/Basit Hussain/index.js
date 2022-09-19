/*-------------------------------Question # 1 Start------------------------------- */

// var car = {
//     Trim:	"L 4.0 TFSI quattro",
//     Engine:	"4.0L Twin-Turbo V8 Gas",
//     Transmission:	"8-Speed Automatic",
//     Drivetrain:	"All-Wheel Drive",
//     Price:	"$130,900",
//     bodyStyle: "4-door sedan",
//     address: function() {
//         return "House # 7, Str # 3, Pitember Street, Garden West, Karachi "
//       },
//     OwnerInfo: function(){
//         return "Owner Name is Ahsan Living in karachi"
//     }
// }
// console.log(car);

/*-------------------------------Question # 1 End------------------------------  */




/*-------------------------------Question # 3 Start------------------------------- */
// var password = prompt(`Enter Your Password`);

// if (password.length > 12 && password.includes("@", "#", "$", "&", "*", "%", "!", "^", "?")) {
//     document.write("Your Password is Strong")
// }

// else if (password.length > 8 || password.length > 5 && password.includes("@", "#", "$", "&", "*", "%", "!", "^", "?")) {
//     document.write("Your Password is Strong enough")
// }

// else {
//     document.write("Your Password is too Week")
// }

// document.write(`<br /><br />Your Password is : ${password}`);

/*-------------------------------Question # 3 End------------------------------  */




/*-------------------------------Question # 4 Start------------------------------  */

// list = document.querySelector(".mylist");
// html = ``;
// const days = ["monday","tuesday","wedsday","thursday","friday", "saturday", "sunday"]
// days.forEach((mylist) =>{
//     html += `<li style="color: red">${mylist}</li>`
// })
// list.innerHTML = html
// document.querySelector(".mylist").style.backgroundColor = "blue";
// document.querySelector(".mylist").style.textAlign = "center";
// document.querySelector(".mylist").style.margin = "50px";


/*-------------------------------Question # 5 Start------------------------------  */



// var math = Number(prompt("Enter Math Marks"));
// var physics = Number(prompt("Enter Physics Marks"));
// var chemistry = Number(prompt("Enter Chemistry Marks"));
// var totalMark = 300;
// var obtainedMark = Number(math+physics+chemistry);
// var percentage = obtainedMark/totalMark*100; 


// document.write("<h1>Mark Sheet</h1>");
// document.write( "Total Mark" +"  "+totalMark +"</br>"); 
// document.write( "Obtained Mark" +"  "+obtainedMark  +"</br>");
// document.write( "Percentage" +"  "+percentage +"%" +"</br>" );


// switch (percentage){
//     case  100:
//     document.write("Grade A")
//     break;
//     case  70:
//     document.write("Grade B")
//     break;
//     case  60:
//     document.write("Grade C")
//     break;
//     case  50:
//     document.write("Grade D")
//     break;
//     default:
//     document.write("Fail")
// }




/*-------------------------------Question # 6 Start------------------------------  */

// let carNames = ["Aston Martin", "Audi", "BMW", "Cadillac", "Chevrolet", "Datsun",  "Ferrari", "Ford"]

// carNames.forEach( (item,index) => {
//     document.write(  index + ":" + item + "<br>"); 

// });

/*-------------------------------Question # 6 End------------------------------  */



/*-------------------------------Question # 9 Start------------------------------  */


// String is a Primitive Data Type. String is used for storing Data example letter,number,symbols,text etc
// Syntax of String is " " Example are given in below
// e.g:
//    var result = "My name is " + name + " My email is " + email + 

// Template literals are String literals allow you to multi line string. 
// Syntax of template string is backtic `` Example are given in below
// e.g:
//    var result = `My name is ${name} My email is ${email}`


// Method of String

// var name = "AhsanSabir"
// console.log(name.toUpperCase())      //convert All string in Capital Letter
// console.log(name.toLowerCase())      //convert All string in Small Letter
// console.log(name[2])                 //it give the value of No.2 index 
// console.log(name.length)             //it give you the total number of character
// console.log(name.slice(1,5))         //it give you the value between  index 1 to 5 start from 1 end in 4 
// console.log(name.substr(1,5))        //it give you the value between  index 1 to 5 start from 1 end in 5


/*-------------------------------Question # 9 End------------------------------  */



/*-------------------------------Question # 8 start------------------------------  */


// Arrays are used to store multiple datatypes in a single variable. We can update the value of array
// Syntax of array is [] example are  given in below
// e.g
//   var aray = ["Daniyal", "Hamza", 94, `my name is ahsan`];
//   console.log(aray); 

// Method of Array

// var aray = ["Daniyal", "Hamza", 94, `my name is ahsan`];

// aray[2] = 95;                                            //it update the value if index 2
// console.log(aray.join("@"));                             //it add the @ symbol between array 
// console.log(aray.concat(["Math","Physic"]))              //it create another array and join in first array varaible
// console.log(aray.pop());                                 //it remove the value at last index                               
// console.log(aray.shift());                               //it remove the value at 0 index
// console.log(aray.push("ehsan"));                         //it add the value at last index 
// console.log(aray.unshift("sabir"));                      //it add the value at 0 index 

/*-------------------------------Question # 8 end------------------------------  */
