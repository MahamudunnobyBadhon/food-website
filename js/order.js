// get value
function getValue(inpuId, bool){
    let inputValue = document.getElementById(inpuId).value;
    if(bool === true){
        let finalValue = parseInt(inputValue)+1;
        document.getElementById(inpuId).value = finalValue;
        return finalValue;
    }
    else{
        return parseInt(inputValue)-1;
    }
}

// validation message
function error(){
    document.getElementById('error').style.display = "block";
    document.getElementById('error').style.color = "red";

}

// price calculation
function priceText(foodNo, price, bool){
    let foodPrice = parseInt(document.getElementById(foodNo).innerText);
    if(bool === true){
        let totalPrice = foodPrice + price;
        document.getElementById(foodNo).innerText = totalPrice;
    }
    else{
        let totalPrice = foodPrice - price;
        document.getElementById(foodNo).innerText = totalPrice;
    }
}

// display none


document.getElementById('plus1').addEventListener('click', function(){
    plusNumber = getValue('value1', true);
    if(plusNumber > 1){
       
        document.getElementById('error').style.display = 'none';
    }

    priceText('foodPrice-1', 250, true);
    
})

document.getElementById('minus1').addEventListener('click', function(){
    let minusNumber = getValue('value1', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value1').value = minusNumber;
        priceText('foodPrice-1', 250, false)
    }
})

// second food

document.getElementById('plus2').addEventListener('click', function(){
    plusNumber = getValue('value2', true);
    if(plusNumber > 1){
       
        document.getElementById('error2').style.display = 'none';
    }

    priceText('foodPrice-2', 220, true);
    
})

document.getElementById('minus2').addEventListener('click', function(){
    let minusNumber = getValue('value2', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value2').value = minusNumber;
        priceText('foodPrice-2', 220, false)
    }
})


// third food

document.getElementById('plus3').addEventListener('click', function(){
    plusNumber = getValue('value3', true);
    if(plusNumber > 1){
       
        document.getElementById('error3').style.display = 'none';
    }

    priceText('foodPrice-3', 170, true);
    
})

document.getElementById('minus3').addEventListener('click', function(){
    let minusNumber = getValue('value3', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value3').value = minusNumber;
        priceText('foodPrice-3', 170, false)
    }
})

//fourth food

document.getElementById('plus4').addEventListener('click', function(){
    plusNumber = getValue('value4', true);
    if(plusNumber > 1){
       
        document.getElementById('error4').style.display = 'none';
    }

    priceText('foodPrice-4', 100, true);
    
})

document.getElementById('minus4').addEventListener('click', function(){
    let minusNumber = getValue('value4', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value4').value = minusNumber;
        priceText('foodPrice-4', 100, false)
    }
})

// fifth food
document.getElementById('plus5').addEventListener('click', function(){
    plusNumber = getValue('value5', true);
    if(plusNumber > 1){
       
        document.getElementById('error5').style.display = 'none';
    }

    priceText('foodPrice-5', 350, true);
    
})

document.getElementById('minus5').addEventListener('click', function(){
    let minusNumber = getValue('value5', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value5').value = minusNumber;
        priceText('foodPrice-5', 350, false)
    }
})

// sixth food
document.getElementById('plus6').addEventListener('click', function(){
    plusNumber = getValue('value6', true);
    if(plusNumber > 1){
       
        document.getElementById('error6').style.display = 'none';
    }

    priceText('foodPrice-6', 280, true);
    
})

document.getElementById('minus6').addEventListener('click', function(){
    let minusNumber = getValue('value6', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value6').value = minusNumber;
        priceText('foodPrice-6', 280, false)
    }
})

// seventh food
document.getElementById('plus7').addEventListener('click', function(){
    plusNumber = getValue('value7', true);
    if(plusNumber > 1){
       
        document.getElementById('error7').style.display = 'none';
    }

    priceText('foodPrice-7', 120, true);
    
})

document.getElementById('minus7').addEventListener('click', function(){
    let minusNumber = getValue('value7', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value7').value = minusNumber;
        priceText('foodPrice-7', 120, false)
    }
})

//eighth food
document.getElementById('plus8').addEventListener('click', function(){
    plusNumber = getValue('value8', true);
    if(plusNumber > 1){
       
        document.getElementById('error8').style.display = 'none';
    }

    priceText('foodPrice-8', 200, true);
    
})

document.getElementById('minus8').addEventListener('click', function(){
    let minusNumber = getValue('value8', false);
    if(minusNumber < 1){
        error();
    }
    else{       
        document.getElementById('value8').value = minusNumber;
        priceText('foodPrice-8', 200, false)
    }
})

// ninth food