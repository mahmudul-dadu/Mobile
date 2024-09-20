// show the cash out form
document.getElementById('btn_show_cash_out')
    .addEventListener('click', function(){


        // show cash out button clicked
        console.log('show cash out button clicked');
        document.getElementById('cash_out_form')
        .classList.remove('hidden');

        // hide the add money form
        document.getElementById('add_money_form')
        .classList.add('hidden');
    });

    // show add money form and hide the  cash out form

    document.getElementById('btn_show_add_money_form')
    .addEventListener('click', function(){


        document.getElementById('add_money_form').classList.remove('hidden');

        document.getElementById('cash_out_form').classList.add('hidden');
    })