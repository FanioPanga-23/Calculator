const   calcDisplay = document.querySelector(".display");
const   container = document.querySelector(".container");
const   calcButtons = [...document.querySelectorAll(".btn")];
let     result = document.querySelector(".result");
let     n1 = "";
let     n2 = "";
let     operator = "";

for (const button of calcButtons )
{
    button.addEventListener("click", ()=>{
        if (isDisplayble(button.textContent))
        {
            if ( isOperator( button.textContent ) )
            {
                if (!isOperator(calcDisplay.textContent.at(-1)))
                    calcDisplay.textContent += button.textContent;
            }
            else
                calcDisplay.textContent += button.textContent;
        }
        if (button.textContent.toLocaleLowerCase() === 'c')
            clearDisplay();
        if (button.textContent === "=")
            parsingInput(calcDisplay.textContent);
    });
}

function    parsingInput(input)
{
    
}

function    findOperator()
{
    let     i = 0;

    while (!isOperator(input[i]))
        i++;
    if (isOperator(input[i]))
        return (i);
    return ( undefined );
}

function    errorMsg()
{
    calcDisplay.textContent = "Malformed expression";
}

function    canCalc(num1, num2)
{
    return (num1.length > 0 && num2.length > 0);
}

function    isDisplayble(char)
{
    return (char.toLocaleLowerCase() !== 'c' && char !== "=");
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
    if (number1 === 0 && number2 === 0)
    {
        calcDisplay.textContent = "Division by zero is undefined";
        return;
    }
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