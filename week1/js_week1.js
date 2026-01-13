let firstName="John";
let age=30;
var isStudent=true;
isStudent="HARKIRAT";
isStudent=10;
// console.log(firstName);
// console.log(age);
// console.log(isStudent);
//assignment
let yourFavColor="Black";
let yourHeight=180;
let youLikePizza=false;
// console.log(yourFavColor);
// console.log(yourHeight);
// console.log(youLikePizza);

//datatypes
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array 0 based indexing
// console.log(number);
// console.log(string);
// console.log(isActive);
// console.log(numbers[2]); //[] ko read karo as of

//operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator
// console.log(sum);
// console.log(isEqual);
// console.log(isTrue);

//function
function greet(name){
  return "Namaste "+ name;
}
let msg=greet("Prakhar");
// console.log(msg);
function sum1(a,b){
  return a+b;
}
// console.log(sum1(1,16));
// console.log(sum1("1","16"));
function canVote(age){
  if(age>=18){
    return true;
  }else{
    return false;
  }
}
// console.log(canVote(23));
// console.log(canVote(11));

//if-else
age=7;
// if(age>=18 && age<=60){
//   console.log("Can Vote and not a budha");
// }else if(age>60){
//   console.log("is a buddha");
// }else{
//   console.log("Balak");
// }

//check even or odd
// let num=23;
// if(num%2==0){
//   console.log("even number");
// }else{
//   console.log("Odd number");
// }

//looping
//for loop
for(let i=0;i<5;i++){
  // console.log(i);
}
let j=0;
while(j<5){
  // console.log(j);
  j++;
}

function sum1toN(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum=sum+i;
  }
  return sum;
}
// console.log(sum1toN(24));

