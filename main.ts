#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a Welcome Message
console.log("\n\tWelcome To \'CodeWithArsalan\' - CLI Simple Calculator\n");

//asking question from users thorugh inquirer

let answer =await inquirer.prompt([
    {message: "Enter First Number" , type:"number", name:"firstnumber"},
    {message: "Enter Second Number" , type:"number", name:"secondnumer"},
    {
        message: "Select one Operator to preform Operators",
        type: "list",
        name: "operator",
        choices: ["Addition","Subrections","Multiplication","Division"],
    }
])

//Condtional statement IF-Else

if(answer.operator === "Addition"){
console.log(answer.firstnumber + answer.secondnumer)
}
else if(answer.operator === "Subractions"){
    console.log(answer.firstnumber - answer.secondnumer)
}
else if (answer.operator === "Multiplication"){
    console.log(answer.firstnumber *answer.secondnumer)
}
else if(answer.operator ==="Division"){
    console.log(answer.firstnumber / answer.secondnumer)
}
else{
    console.log("Invaild Input")
}