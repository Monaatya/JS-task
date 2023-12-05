//1- Write a program that allow to user enter number then printit
/*var num1= Number (prompt("please enter number"));
console.log(num1);*/

//2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
/* var num2= Number(prompt("please enter the number"));
if(num2 % 3 == 0 && num2 % 4 == 0){
    console.log("yes");
} else{
    console.log("No");
}*/

//3- Write a program that allows the user to insert 2 integers then print the max
/*var num1= Number(prompt("please enter first number"));
var num2= Number(prompt("please enter second number"));

if (num1 > num2){
    console.log("number1 " + num1 + " is greater than number2 " + num2  );
} else if (num1 < num2) {
    console.log("number1 " + num1 + " is less than number2 " + num2    );
} else {
    console.log("number1 " + num1 + " is equal " + num2  );
}*/

//4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
/* var num= Number(prompt("please enter the number"));
if (num> 0){
    console.log("the number " + num + " is positive");
}else{
    console.log("the number " + num + " is negative");
} */

//5-Write a program that take 3 integers from user then print the max element and the min element.
/* var num1= Number(prompt("please enter number 1"));
var num2= Number(prompt("please enter number 2"));
var num3= Number(prompt("please enter number 3"));
if( num1 > num2 && num1 > num3){
    console.log("the maximum number is: " + num1);
    if( num2 > num3){
        console.log("the minimum number is: " + num3);
    }else{
        console.log("the minimum number is: " + num2);
    }
} else if (num2 > num1 && num2>num3){
    console.log("the maximum number is: " + num2);
  if(num1 > num3){
    console.log("the minimum number is: " + num3);
  }else{
    console.log("the minimum number is: " + num1);
  }
}else {
    console.log("the maximum number is :  " + num3);
    if(num1 > num2){
        console.log("the minimum number is: " + num2);
    }else{
        console.log("the minimum number is: " + num1);
    }
} */

//6- & 7- Write a program that allows the user to insert integer number then check If a number is oven or odd
/* var num = Number( prompt(" please enter the number"));
if(num % 2 ==0){
    console.log(" the number " + num + " is even");
} else{
    console.log(" the number " + num + " is odd");
}*/

//8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

/* var char = prompt("please enter the character "); 
if(char == 'a' || char == 'A' ){
    console.log(" the character " + char + " Vowel");
} else if(char == 'e' || char == 'E'){
    console.log(" the character " + char + " Vowel");
}else if(char == 'i' || char == 'I'){
    console.log(" the character " + char + " Vowel");
}else if(char == 'o' || char == 'O'){
    console.log(" the character " + char + " Vowel");
}else if(char == 'u' || char == 'U'){
    console.log(" the character " + char + " Vowel");
}else{
        console.log(" the character " + char + " Consonant");
}*/

//9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// var num= Number(prompt("please enter the number"));
// for( var i = 1; i <= num; i++ ){
//  console.log(i);
// }

//10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// var num= Number(prompt("please enter the number"));
// for(var i=1; i<=12; i++){
//     console.log(i*num);
// }

// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var num= Number(prompt("please enter the number"));
// for( var i = 1; i <= num; i++ ){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//12- Write a program that take two integers then print the power
// var num= Number(prompt("please enter the number"));
// var power= Number(prompt("please enter the power"));
// var res = 1;
// for( var i = 0; i< power; i++){
//     res= res*num  ;
// }
// console.log(res);

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var sub1= Number(prompt("please enter the sub1"));
// var sub2= Number(prompt("please enter the sub2"));
// var sub3= Number(prompt("please enter the sub3"));
// var sub4= Number(prompt("please enter the sub4"));
// var sub5= Number(prompt("please enter the sub5"));

// var total= (sub1 + sub2 + sub3 + sub4 + sub5 );
// console.log ("the total is " + total);
// var average= ("the average is  " +  total / 5);
// console.log(average);
// var percentage = ((total / (5*100)) * 100) ;
// console.log("the percentage is " + percentage);

//13-Write a program to input month number and print number of days in that month. 
// var monthNumber= Number(prompt("please enter the month number"));
// if(monthNumber == 1 || monthNumber==3 || monthNumber== 5 || monthNumber== 7 || monthNumber==8 || monthNumber== 10 || monthNumber== 12){
//     console.log ("the number of days in that month : 31 ")
// }else if(monthNumber== 4|| monthNumber== 6|| monthNumber== 9|| monthNumber== 11){
//     console.log ("the number of days in that month : 30 ")
// } else{
//     console.log ("the number of days in that month : may be 28 or 29 ")
// }

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// var physics= Number(prompt("please enter the physics"));
// var Chemistry= Number(prompt("please enter the Chemistry"));
// var Biology= Number(prompt("please enter the Biology"));
// var Mathematics= Number(prompt("please enter the Mathematics"));
// var Computer= Number(prompt("please enter the Computer"));

// var total = (physics + Chemistry + Biology + Mathematics + Computer);
// var percentage = (total/ (5*100) *100)
// console.log(percentage)
// if(percentage > 90 ){
//     console.log("the grade is A");
// }else if(percentage>80){
//     console.log("the grade is B");
// }else if(percentage>70){
//     console.log("the grade is D");
// }else if(percentage>60){
//     console.log("the grade is D");
// }else if(percentage>50){
//     console.log("the grade is E");
// }else {
//     console.log("the grade is F");
// }

// ******************************** Using switch case*******************************
//15- Write a program to print total number of days in month
// var month= Number(prompt("please enter the number of month"));
// switch(month){
//     case 1: 
//             console.log("31 days");
//             break;
//         case 2: 
//             console.log(" may be 28 or 29 days");
//             break;
//         case 3: 
//             console.log("31 days");
//             break;
//         case 4: 
//             console.log("30 days");
//             break;
//         case 5: 
//             console.log("31 days");
//             break;
//         case 6: 
//             console.log("30 days");
//             break;
//         case 7: 
//             console.log("31 days");
//             break;
//         case 8: 
//             console.log("31 days");
//             break;
//         case 9: 
//             console.log("30 days");
//             break;
//         case 10: 
//             console.log("31 days");
//             break;
//         case 11: 
//             console.log("30 days");
//             break;
//         case 12: 
//             console.log("31 days");
//             break;
//         default: 
//             console.log("Invalid input! Please enter month number between 1-12");
// }

//16- Write a program to check whether an alphabet is vowel or consonant
// var char= prompt("please enter the character");
// switch(char){
// case 'a':
// case 'e':
// case 'i':
// case 'o':
// case 'u':
// case 'A':
// case 'E':
// case 'I':
// case 'O':
// case 'U':
// console.log ("Vowel character");
// break;
// default:
//     console.log("Consonant character") ;
// }

// 17- Write a program to find maximum between two numbers
// var num1= Number(prompt("please enter number1"));
// var num2= Number(prompt("please enter number2"));
// switch(true){
//     case (num1>num2):
//         console.log("the maximum number " + num1);
//         break;
//     case (num1< num2):
//         console.log("the maximum number " + num2);
//         break;
//         case (num1 === num2):
//         console.log("the number1 : " + num1 +  " is equal to " + num2);
//         break;
//         default:
//     console.log("not valid") ;
// }

//18- Write a program to check whether a number is even or odd
// var num= Number(prompt("please enter number"));
// switch(true){
//     case (num % 2 ==0 ):
//         console.log("the number " + num + " is Even");
//         break;
//         default:
//     console.log("the number " + num + " is Odd") ;
// }

// 19- Write a program to check whether a number is positive or negative or zero
// var num= Number(prompt("please enter number"));
// switch(true){
//     case (num > 0  ):
//         console.log("the number " + num + " is Positive");
//         break;
//         default:
//     console.log("the number " + num + " is negative") ;
// }

// 20- Write a program to create Simple Calculator

// var operator= prompt("please enter the operators");

// var num1= Number(prompt("please enter the number1"));
// var num2= Number(prompt("please enter the number2"));

// if(operator == '+') {
//     result = num1 + num2;
// }
// else if (operator == '-') {
//     result = num1 - num2;
// }
// else if (operator == '*') {
//     result = num1 * num2;
// }
// else {
//     result = num1 / num2;
// }
// console.log( num1 +  operator +  num2  + " = " + result )


