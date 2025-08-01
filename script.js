function calculateTip(percent) {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount)) {
        const tip = amount * (percent / 100);
        const total = amount + tip;
        document.getElementById('result').innerHTML = `チップ: $${tip.toFixed(2)} (${percent}%) 合計: $${total.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = '金額を正しく入力してね';
    }
}