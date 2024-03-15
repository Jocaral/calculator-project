// function add(num1,num2){
//     return num1+num2;
// };

// function substract(num1,num2){
//     return num1-num2;
// };

// function multiply(num1,num2){
//     return num1*num2;
// };

// function divide(num1,num2){
//     return num1/num2;
// };

//     function operate(num1,num2,func){
//         if (func==='add'){
//         return add(num1,num2);
//         } else if (func==='substract'){
//             return substract(num1,num2);
//         } else if (func==='multiply'){
//             return multiply(num1,num2);
//         } else if (func==='divide'){
//         return divide(num1,num2);
//         }}


        const calculator = document.querySelector('.calculator')
        const keys = calculator.querySelector('.calculator-keys')
        const display = document.querySelector('.calculator-display')
        
        keys.addEventListener('click', e => {
         if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;

            if (!action) {
                if (displayedNum === '0'|| previousKeyType === 'operator') {
                    display.textContent = keyContent;
                    calculator.dataset.previousKeyType = 'number';
                }else {display.textContent = displayedNum + keyContent;
                    
                      }
                      console.log('number key!');
            }
            else if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
              ) {
                key.classList.add('is-depressed');
                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
                console.log('operator key!')
              }
             else if (action === 'decimal') {
                display.textContent = displayedNum + '.';
                console.log('decimal key!')
              }
              
              else if (action === 'clear') {
                console.log('clear key!')
              }
              
              else if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum;
                console.log('equal key!')
              }

              Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))

         } 
        
        });


        



