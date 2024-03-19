function add(num1,num2){
    return num1+num2;
};
function subtract(num1,num2){
    return num1-num2;
};
function multiply(num1,num2){
    return num1*num2;
};
function divide(num1,num2){
  if (num2===0){
      return 'never try';
  }
  else{
    return num1/num2;
}};

    function calculate(num1,operator,num2){
        if (operator==='add'){
        return add(parseFloat(num1),parseFloat(num2));
        } else if (operator==='subtract'){
            return subtract(parseFloat(num1),parseFloat(num2));
        } else if (operator==='multiply'){
            return multiply(parseFloat(num1),parseFloat(num2));
        } else if (operator==='divide'){
        return divide(parseFloat(num1),parseFloat(num2));
        }}


        const calculator = document.querySelector('.calculator');
        const keys = calculator.querySelector('.calculator-keys');
        const display = document.querySelector('.calculator-display');
        
        keys.addEventListener('click', e => {
         if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));


            if (!action) {
                if (displayedNum === '0'|| previousKeyType === 'operator'||previousKeyType === 'calculate') {
                    display.textContent = keyContent;
              
                }else {display.textContent = displayedNum + keyContent;
                    
                      } calculator.dataset.previousKeyType = 'number';
                      console.log('number key!');
            }
            else if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
              ) {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum
                
              // Note: It's sufficient to check for firstValue and operator because secondValue always exists
                if (firstValue && operator && previousKeyType!=='operator'&& previousKeyType !== 'calculate') {
                  const calcValue = calculate(firstValue, operator, secondValue)
                  display.textContent = calcValue;
                  calculator.dataset.firstValue = calcValue;
                  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

                }else{ 
                  calculator.dataset.firstValue = displayedNum;
                }
                key.classList.add('is-depressed');
                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.operator = action;
                console.log('operator key!')
              }

             else if (action === 'decimal') {
                if (!displayedNum.includes('.')) {
                  display.textContent = displayedNum + '.';
                } else if (previousKeyType === 'operator'||previousKeyType === 'calculate') {
                  display.textContent = '0.';
                }
                calculator.dataset.previousKeyType = 'decimal';

                console.log('decimal key!')
              }
              
              else if (action === 'clear') {
                if (key.textContent==='AC'){
                  calculator.dataset.firstValue='';
                  calculator.dataset.modValue='';
                  calculator.dataset.operator='';
                  calculator.dataset.previousKeyType='';
                } else{
                  key.textContent = 'AC';
                }
                display.textContent=0;
                calculator.dataset.previousKeyType='clear';
                console.log('clear key!');
              }
              
              else if (action === 'calculate') {
                let firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                let secondValue = displayedNum;
                
                if (firstValue) {
                  if (previousKeyType==='calculate'){
                  firstValue=displayedNum;
                  secondValue=calculator.dataset.modValue;
                }
                  display.textContent = calculate(firstValue, operator, secondValue);
                
              }
              calculator.dataset.modValue=secondValue;
              calculator.dataset.previousKeyType = 'calculate';
              console.log('equal key!');
            }
              if (action !== 'clear') {
                const clearButton = calculator.querySelector('[data-action=clear]')
                clearButton.textContent = 'CE'
              }
            
         }
        });


        



