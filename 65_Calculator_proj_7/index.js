// let btnOpen = document.getElementById('Open');
// let btnClose = document.getElementById('Close');
// let btnClear = document.getElementById('Clear');
// let btnMod = document.getElementById('Mode');
// let btnMul = document.getElementById('Mul');
// let btnDiv = document.getElementById('Div');
// let btnMin = document.getElementById('Min');
// let btnPlus = document.getElementById('Plus');
// let btnDot = document.getElementById('Dot')

// let btn0 = document.getElementById('btn0');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let btn4 = document.getElementById('btn4');
// let btn5 = document.getElementById('btn5');
// let btn6 = document.getElementById('btn6');
// let btn7 = document.getElementById('btn7');
// let btn8 = document.getElementById('btn8');
// let btn9 = document.getElementById('btn9');

// let btn = [btn0 , btn1 , btn2 , btn3 , btn4 , btn5 , btn6 , btn7 , btn8 ,btn9];
// let op = [btnOpen , btnClose , btnMod , btnDiv , btnMul , btnPlus , btnMin , btnDot];


// for (const key in btn) {
//     btn[key].addEventListener('click',()=>{
//         console.log('btn' , key , 'is clicked');
//         screen.value += key ;
//     })
// }

// for (const key of op) {
//     key.addEventListener('click', ()=>{
//         screen.value += op[key]
//     })
// }

// let btnClear = document.getElementById('Clear');
// btnClear.addEventListener('click', () => {
    //     screen.value = "";
    // })
    
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button')
let screenValue = "";
for (const btn of buttons) {
    btn.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = "*";
            screenValue += buttonText ;
            screen.value += buttonText ;
        }
        else if(buttonText == 'C')
        {
            screenValue = "";
            screen.value = "";
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
        }
        else 
        {
            screenValue += buttonText;
            screen.value += buttonText ;
        }
    })
}