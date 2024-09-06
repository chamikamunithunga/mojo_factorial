document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number = parseInt(document.getElementById('numberInput').value);
    const resultBox = document.getElementById('result');

    if (isNaN(number) || number < 0) {
        resultBox.textContent = "Please enter a valid non-negative number.";
        resultBox.classList.add('show');
        return;
    }

    
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    const result = factorial(number);
    resultBox.textContent = `Factorial of ${number} is ${result}`;
    resultBox.classList.add('show');
});


document.querySelector('.reset-btn').addEventListener('click', function() {
    document.getElementById('result').classList.remove('show');
});
