function calculateTip() {
  const billAmount = document.getElementById("billAmount").value;
  const tipPercentage = document.getElementById("tipPercentage").value;
  const tip = (billAmount * tipPercentage) / 100;
  const total = parseFloat(billAmount) + parseFloat(tip);
  
  document.getElementById("result").innerHTML = 
    `Tip: $${tip.toFixed(2)}<br>Total: $${total.toFixed(2)}`;
}

