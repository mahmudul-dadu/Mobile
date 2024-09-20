// console.log('home added');

// add money to the account
/* s-1: add event handler
       prevent page reload afted from submit
   s-2: get money to be added to the acccount balance
   s-3: verify pin number 
   step : 4 get the current balance
   step-5: add addmore
   step-6: update the balance in the UI / DOM
*/

// step-1: add event handler to the add money button inside the formet
document.getElementById('btn_add_money')
    .addEventListener('click', function(event){
        // prevent page reload after from submit
        event.preventDefault();
        console.log('money add btn clicked');
        // step -2 : get money to be added to the account
        const addMoneyInput = document.getElementById('input_add_money').value;
        console.log(addMoneyInput);

        // get the pin number provided
        const pinNumberInput = document.getElementById('input_pin_number').value;
        console.log(pinNumberInput);

        // step -3: verify pin number 
        // wrong way to validate pin number
        if(pinNumberInput === '1234'){
            console.log('adding money to your account')

            // step : 4 get the current balance

            // text hole --> innerText
            // input filed ---> value
            const balance = document.getElementById('account_balance').innerText;
            console.log(balance);

            // step-5: add addmore
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber + addMoneyNumber;
            console.log(newBalance);


            // step-6: update the balance in the UI / DOM
            document.getElementById('account_balance').innerText = newBalance;
        }
        else{
            alert('Failed to add money! Please try again.')
        }


});

// cash out 

