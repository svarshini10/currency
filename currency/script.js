function convert() {
    var amount = parseFloat(document.getElementById('amount').value);
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            var rate = data.rates[to];
            var result = amount * rate;
            document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
        })
        .catch(error => console.log(error));
}
