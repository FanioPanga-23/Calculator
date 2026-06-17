const   calcDisplay = document.querySelector(".display");
const   container = document.querySelector(".container");
const   calcButtons = [...document.querySelectorAll(".btn")];
let     result = document.querySelector(".result");
let     n1 = "";
let     n2 = "";
let     total = "";

for (const button of calcButtons )
{
    button.addEventListener("click", ()=>{
        if ( isOperator( button.textContent) )
            alert("Operator: " + button.textContent);
        if (button.textContent.toLocaleLowerCase() === 'c')
        {
            clearDisplay();
        }
        if (button.textContent.toLocaleLowerCase() !== 'c')
            calcDisplay.textContent += button.textContent;
    });
}

function    clearDisplay()
{
    let     old = calcDisplay.textContent;
    let     newText = old.slice(0, -1);
    calcDisplay.textContent = newText;
}

function    isOperator( char )
{
    return (char === "+" || char === "-" || char === "/" || char === "*");
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