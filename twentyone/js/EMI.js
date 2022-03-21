function calculate() {
    var Amount = document.getElementById('Amount').value;
    var interestRate = document.getElementById('interestRate').value;
    var tenure = document.getElementById('tenure').value;

    if (isNaN(Amount) || Amount <= 0) {
        alert("Please Enter Valid Amount");
    }

    interestRate = interestRate / (12 * 100);
    tenure = tenure * 12;
    var emi = Amount * interestRate * Math.pow(1 + interestRate, tenure) / (Math.pow(1 + interestRate, tenure) - 1);

    document.getElementById('emi').innerHTML = emi.toFixed(2);

    var totalPayment = emi * tenure;
    document.getElementById('totalPayment').innerHTML = totalPayment.toFixed(2);

    var totalInterest = totalPayment - Amount;
    document.getElementById('totalInterest').innerHTML = totalInterest.toFixed(2);


}

calculate();