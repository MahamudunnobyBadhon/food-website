
document.getElementById('plus1').addEventListener('click', function(){
    let plus = document.getElementById('value1').value;
    plusNumber =parseInt( plus ) + 1;

    if(plusNumber > 1){
        document.getElementById('error').style.display = "none";
    }
    document.getElementById('value1').value = plusNumber;

    //price
    
    let price1 = document.getElementById('foodPrice-1').innerText;
    let price = parseInt(price1);
    let qunatity = document.getElementById('value1').value;
    let totalPrice = price + 250;   
    document.getElementById('foodPrice-1').innerText = totalPrice;

})


document.getElementById('minus1').addEventListener('click', function(){
    let minus= document.getElementById('value1').value;
    if(minus <= 1){
        document.getElementById('error').style.display = "block";
        document.getElementById('error').style.color = "red";

    }
    else{       
        minusNumber =parseInt( minus ) - 1;
        document.getElementById('value1').value = minusNumber;
        let price1 = document.getElementById('foodPrice-1').innerText; 
        let price = parseInt(price1);  
        let qunatity = document.getElementById('value1').value;  
        let totalPrice = price - 250;
        document.getElementById('foodPrice-1').innerText = totalPrice;
    }

})
