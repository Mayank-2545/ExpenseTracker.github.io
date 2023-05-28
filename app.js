document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var expenseName = document.getElementById('expenseName').value;
    var expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (expenseName && expenseAmount) {
        addExpense(expenseName, expenseAmount);
        clearForm();
    }
});

function addExpense(name, amount) {
    var expenseList = document.getElementById('expenses');
    var listItem = document.createElement('li');
    listItem.textContent = name + ': $' + amount.toFixed(2);
    expenseList.appendChild(listItem);

    updateTotalExpense(amount);
}

function clearForm() {
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseName').focus();
}

function updateTotalExpense(amount) {
    var totalExpense = document.getElementById('totalExpense');
    var currentTotal = parseFloat(totalExpense.getAttribute('data-total')) || 0;
    var newTotal = currentTotal + amount;
    totalExpense.setAttribute('data-total', newTotal);
    totalExpense.textContent = 'Total Expense: $' + newTotal.toFixed(2);
}

function getTotalExpense() {
    var totalExpense = document.getElementById('totalExpense');
    return parseFloat(totalExpense.getAttribute('data-total')) || 0;
}


