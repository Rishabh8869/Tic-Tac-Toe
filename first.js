//operators in java script
// let a =5;
// let b =2;
// console.log("a =", a, "& b=",b);
// console.log("a +b =",a +b);
// console.log("a-b =",a-b);
// console.log("a*b=",a*b);
// console.log("a / b=",a /b);
// console.log("a ** b=",a **b);

// Conditional Statements

// let age = 17;

// if (age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18){
//     console.log("you cannot vote")
// }
        //conditional if -else statement
// let age = 18;
// let mode ="dark";
// let color;

// if (mode==="light"){
//     color ="black";

// }
// else{
//     color= "white";
// }
      //conditional if statement 
// if (mode ==="light"){
//     color= "white";
// }
// console.log(color);
    
      //odd even programe
//   let num =11111111111111;
//   if(num % 2 === 0) {
//    console.log(num,"num is even")
//   }  
//   else{
//     console.log(num ,"num is odd");

//   } 

//condistion statement 
// let age = 25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);  

          //  adult or not adult
// let age = 16;
// age >=18 ? console.log("adult") : console.log("not adult");


       //prompt
// let name = prompt("hello");
// console.log(name);
       //prompt number
       //Get user to input a number using prompt ("enter a number :"). Check if the number is a mulripul of 5 or not 
//  let num = prompt("enter the number:");

//  if (num % 5 === 0){
//   console.log(num,"is multipul of 5");
     
//  }
//  else {
//       console.log (num, "is not  multipul of 5")
//  }


   //QUESTION-2 . Write a code which can give gredes to students according to their scores:
//    let score = prompt("enter the number");
//    let grade;
//    if(score >=80 && score <=100 ){
//       //console.log(score,"the gread is A");
//       grade ="A";
//    }  
//    else if(score >=70 && score < 80){
//       //console.log(score,"the gread is B");
//       grade ="B";
//    } 
//    else if(score >=60 && score <70){
//       //console.log(score,"the gread is C");
//       grade ="C";

//    }
//    else if(score >= 50 && score < 60){
//       //console.log(score,"the gread is D");
//       grade ="D";
//    }
//    else if(score >=0 && score < 49){
//       //console.log(score , "the gread is F 
//       grade ="F";
//    }
//       console.log("According to you score, your grade was:", grade)
   
      



      //LOOP 
// let n;
// n =100;
// let i;
// for(i=1; i<=n; i++){

// console.log("RISHABH SINGH");
// }


    // using for loop to print the sum of 1 to 1000
// let sum = 0;
// let n = 10;
// for(let i=1; i<=n; i++){
//       sum = sum +i;
// }
// console.log("sum =" ,sum);
// console.log("loop has ended");


// using while loop to print the sum of 1 to 100
// let sum = 0;
//  let n =10;
// let i =1;
// while(i<=n){
      
//       sum = sum +i;
//       i++;
// }
//       console.log("sum =", sum);
      

// for of loop

// let str = "RishabhSingh"
// //iterator -> characters
// for(let i of str){
//       console.log("i=",i)
// }

// print the number betbeen 0 to 100

// let n =100;
// for(let i =0; i<=100; i++){
//       if(i%2==0){
//             console.log("i=", i)

//       }

      

// }

//Prectice question number 2
// let gameNum = 25;
// let userNum = prompt("guess the game number :");
// while(userNum != gameNum){
//       userNum = prompt("you entered wrong mumber . Guess again : ");

// }
// console.log("congratulations, you entered the right number");


// function in java script
// function myFunction(msg){
//       // console.log("i am learning java script !");
//       // console.log("my name is rishabh singh :)");
//       console.log(msg );

// }
// myFunction("i love java scrip");




// BY USING FUNCTION COUNT THE VOWEL
function countVowel(str){
      let count = 0;
      for(const char of str){
            if(char === "a" || char === "e" || char === "i" || char === "o" ||char === "u") {
                  count++; 
            }
      }
      console.log(count);
}