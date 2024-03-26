import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {
        message:"Enter first Number",
        type:"number",
        name:"firstNumber"
     },
    {
        message:"Enter Second Number",
        type:"number",
        name:"SecondNumber"
    },
    {
        message:"select one of the operators perform operation",
        type:"list",
        name:"operator",
       choices:
       ["+","-","*", "/","**","%"]
    },
]);

if(answer.operator === "+"){
          console.log(answer.firstNumber + answer.SecondNumber);
          
}else if(answer.operator === "-"){
    console.log(answer.firstNumber - answer.SecondNumber);

}else if(answer.operator === "*"){
    console.log(answer.firstNumber * answer.SecondNumber);

}else if(answer.operator === "/"){
    console.log(answer.firstNumber / answer.SecondNumber);

}else if(answer.operator === "**"){
    console.log(answer.firstNumber ** answer.SecondNumber);

}else if(answer.operator === "%"){
    console.log(answer.firstNumber % answer.SecondNumber);

}else{
    console.log("pleace select valid operator");
}

//this is my fist project 