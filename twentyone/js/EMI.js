function monthcal() {
    var Amount = document.getElementById('Amount').value;
    var interestRate = document.getElementById('interestRate').value;
    var tenure = document.getElementById('tenure').value;

    if (isNaN(Amount) || Amount <= 0) {
        alert("Please Enter Valid Amount");
    }

    interestRate = interestRate / (12 * 100);
    tenure = tenure * 12;
    var monthly = Amount * interestRate * Math.pow(1 + interestRate, tenure) / (Math.pow(1 + interestRate, tenure) - 1);

    document.getElementById('monthly').innerHTML = monthly.toFixed(2);
}

monthcal();

function yearcal() {
    var Amount = document.getElementById('Amount').value;
    var interestRate = document.getElementById('interestRate').value;
    var tenure = document.getElementById('tenure').value;


    interestRate = interestRate / (12 * 100);
    tenure = tenure * 12;
    var monthly = Amount * interestRate * Math.pow(1 + interestRate, tenure) / (Math.pow(1 + interestRate, tenure) - 1);


    var totalPayment = monthly * tenure;


    var totalInterest = totalPayment - Amount;
    document.getElementById('totalInterest').innerHTML = totalInterest.toFixed(2);
}
yearcal();


function totalcal() {
    var Amount = document.getElementById('Amount').value;
    var interestRate = document.getElementById('interestRate').value;
    var tenure = document.getElementById('tenure').value;

    interestRate = interestRate / (12 * 100);
    tenure = tenure * 12;
    var monthly = Amount * interestRate * Math.pow(1 + interestRate, tenure) / (Math.pow(1 + interestRate, tenure) - 1);

    var totalPayment = monthly * tenure;
    document.getElementById('totalPayment').innerHTML = totalPayment.toFixed(2);
}

totalcal();