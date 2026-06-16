const   calcDisplay = document.querySelector(".display");
const   container = document.querySelector(".container");
const   calcButtons = [...document.querySelectorAll(".btn")];
let     result = document.querySelector(".result");


for (const button of calcButtons )
{
    button.addEventListener("click", ()=>{
        calcDisplay.textContent += button.textContent;
    });
}

function    sum( number1, number2 )
{
    return ( number1 + number2 );
}

function    sub( number1, number2 )
{
    return ( number1 - number2 );
}

function    division( number1, number2 )
{
    return ( number1 / number2 );
}

function    product( number1, number2 )
{
    return ( number1 * number2 );
}

function    operate(operator, number1, number2)
{
    switch ( operator )
    {
        case "+":
            sum( number1, number2 );
            break;
        case "-":
            sub( number1, number2 );
            break;
        case "/":
            division( number1, number2 );
            break;
        case "*":
            product( number1, number2 );
            break;
    }
}