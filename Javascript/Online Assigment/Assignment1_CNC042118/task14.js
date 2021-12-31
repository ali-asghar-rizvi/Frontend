var a = 2;
var b = 1;

var Condition1 = --a;
var Condition2 = Condition1 - (--b);
var Condition3 = Condition2 + (++b);
var Condition4 = Condition3 + (b--); 

document.write( 
"a is "        +a+  
"</br> b is "   +b+ 
"</br> --a = "             +Condition1+ 
"</br> --a - --b =  "   +Condition2+ 
"</br> --a - --b + ++b = "     +Condition3+
"</br>--a - --b + ++b + b-- = "    +Condition4+ 
"</br>Result is "     +Condition4);

