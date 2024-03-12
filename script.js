function add(num1,num2){
    return num1+num2;
};

function substract(num1,num2){
    return num1-num2;
};

function multiply(num1,num2){
    return num1*num2;
};

function divide(num1,num2){
    return num1/num2;
};

function operate(num1,num2,func){
    return func(num1,num2);
};

let para=document.querySelector('p');

let firstNumber =prompt('First number');

    const addbtn=document.querySelector('.add');
    const equal=document.querySelector('.equal');

    addbtn.addEventListener('click', ()=>{
        let secondNumber = prompt('Second number');
        const operator = addbtn.value
        console.log(operator);
        
        equal.addEventListener('click', ()=>{
        
        return para.textContent=operate(firstNumber,secondNumber,operator);
        });
    });
    


