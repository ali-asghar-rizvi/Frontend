//print  star triangle
 var numberOfLines=Number(prompt("Enter number of lines"));
   for(var i=1; i <= numberOfLines; i++) {
     for(var j=1; j<=i; j++)
      {
        document.write('*');
      }
     document.write('<br />');
   }
