const   calcDisplay = document.querySelector(".display");
let     result = document.querySelector(".result");

calcDisplay.textContent = result.textContent;

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