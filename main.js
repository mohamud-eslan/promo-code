document.getElementById("submit").onclick = function(){
    const amount = document.getElementById("amount").value;
    const code = document.getElementById("code").value;
    const submit = document.getElementById("submit").value;
    const output = document.getElementById("output");
    const amountInt = parseInt(amount);

    const promocode1 = "xb219";
    const promocode2 = "xb240";
    const promocode3 = "xb232";
    if(code===promocode1){
        const discount = 0.25 * amountInt;
        const payableAmount = amountInt - discount;
        output.innerHTML = `the promo code is correct and amount to pay is ${payableAmount} and didcount is
        ${discount}`}

        if(code===promocode2){
            const discount = 0.19569 * amountInt;
            const payableAmount = amountInt - discount;
            output.innerHTML = `the promo code is correct and amount to pay is ${payableAmount} and didcount is
            ${discount}`}

            if(code===promocode3){
                const discount = 100;
                const payableAmount = amountInt - discount;
                output.innerHTML = `the promo code is correct and amount to pay is ${payableAmount} and didcount is
                ${discount}`}
            
      
        
  
    
    

    


}