import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {message:"Enter first Number",type:"number",name:"firstNumber"},
    {message:"Enter Second Number",type:"number",name:"SecondNumber"},
    {message:"select one of the operators perform operation",type:"list",name:"operator",
choices:["Addition","Subtraction", "Multiplaction", "Division"]},
]);
if(answer.operator === "Addition"){
          console.log(answer.firstNumber + answer.SecondNumber);
          
}else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.SecondNumber);

}else if(answer.operator === "Multiplaction"){
    console.log(answer.firstNumber * answer.SecondNumber);

}else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.SecondNumber);

}else{
    console.log("pleace select valid operator");
    
}