let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (const item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'c'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            try{
                screen.value = eval(screenValue);
                screenValue = screen.value;
            }
            catch(e){
                let errorMsg = document.querySelector('.errorMsg');
                errorMsg.className = 'errorMsg';
                setTimeout(() => {
                    errorMsg.classList += ' errorMsg1';
                }, 3000);
            }
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}