document.getElementById('btn_cash_out')
    .addEventListener('click', function(event){
        event.preventDefault();


        // step -2 : get money to be added to the account
        const MoneyOutput = document.getElementById('input_cash_out').value;
        console.log(MoneyOutput);

        // get the pin number provided
        const pinNumberInput = document.getElementById('input_cash_out_pin_number').value;
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
            const addMoneyNumber = parseFloat(MoneyOutput);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber - addMoneyNumber;
            console.log(newBalance);


            // step-6: update the balance in the UI / DOM
            document.getElementById('account_balance').innerText = newBalance;
        }
        else{
            alert('Failed to add money! Please try again.')
        }

    })