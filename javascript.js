
function send1(){
    let dado1 = document.getElementById('box-int-1').value;
    let byte = 8;
    let total = byte*dado1;


    let result = document.getElementById('resp_one');
    result.textContent = dado1 + ' Bytes = ' + total + 'bits';

    if (dado1 == 1){
        let result = document.getElementById('resp_one');
        result.textContent = dado1 + 'Byte = ' +  total +  'bits';
    }
    if (dado1 ==''){
        let result = document.getElementById('resp_one');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}

function send2(){
    let dado1 = document.getElementById('box-int-2').value;
    let bit = 8;
    let total = dado1/bit;


    let result = document.getElementById('resp_two');
    result.textContent = dado1 + 'Bits =' + total + ' Bytes';

    if (dado1 == 1){

        let result = document.getElementById('resp_two');
        result.textContent = dado1  +  ' Bit =  '  +  total + ' Bytes';

    }
    if (dado1 == ''){
        let result = document.getElementById('resp_two');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}
function send3(){
    let dado1 = document.getElementById('box-int-3').value;
    let dado2 = 1.8
    let total = dado1*dado2+32

    let result = document.getElementById('resp_three');
    result.textContent = dado1 + 'Celsius = ' + total + ' Fahrenheit';

    
    if (dado1 == ''){
        let result = document.getElementById('resp_three');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}
function send4(){
    let dado1 = document.getElementById('box-int-4').value;
    let dado2 = 1.8
    let dado3 = 32
    let subtotal = dado1-dado3
    let total = subtotal/dado2.toFixed(0);

    let result = document.getElementById('resp_four');
    
    result.textContent = dado1 + ' Fahrenheit = ' + total + ' Celsius'

    if (dado1 == ''){
        let result = document.getElementById('resp_four');
        result.textContent = 'Ops.. você não digitou nada :(';
    }
}