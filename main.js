let tipAmt = document.querySelector('#tipamt')
let ppleAmt = document.querySelector('#ppleamt');
let slec = document.querySelector('.services');
let calcBtn = document.querySelector('#calc');
let err = document.querySelector('#err');
let ovl = document.querySelector('.overlay');
let dismissBtn = document.querySelector('.cancel');
let tipoup = document.querySelector('#tipoup');
let ppleoup = document.querySelector('#ppleoup');
let total = document.querySelector('#total');

calcBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    //    validate
    if (tipAmt.value == "" || ppleAmt.value == "") {
        setTimeout(func, 100)
        function func(){
            err.style.display = "block"
        }
    }if(tipAmt.value <= 0 || ppleAmt.value <= 0 || slec.value > 50){
        alert('cannot be lessthan 0, input number > 0 and < 50%')
    }if(slec.value <= 0){
        alert('cannot be lessthan 0, input number > 0 and > 50%')
    }  
    else {
        err.style.display = "none";

        tipoup.innerHTML = tipAmt.value;
        ppleoup.innerHTML = ppleAmt.value;
        total.innerHTML = (tipAmt.value * ppleAmt.value)-(slec.value/100) + '$'+'each';
        ovl.style.display = "block"
    }

    document.getElementsByTagName('input').value = "";
});

dismissBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    ovl.style.display = "none"
});
