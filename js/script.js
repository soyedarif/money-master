function getInputValueFromElement(id) {
  const element = document.getElementById(id);
  const elementString = element.value;
  const elementAmount = parseFloat(elementString);
  if (isNaN(elementAmount)) {
    alert("Please put Valid Amount");
    element.value = "";
  } else {
    return elementAmount;
  }
}
function setInnerTextOfElement(id, value) {
  document.getElementById(id).innerText = value;
}
function totalExpenses() {
  const food = getInputValueFromElement("food-field");
  const rent = getInputValueFromElement("rent-field");
  const cloth = getInputValueFromElement("clothes-field");
  const expenses = food + rent + cloth;
  return expenses;
}

document.getElementById("btn-calculate").addEventListener("click", function () {
  const income = getInputValueFromElement("income-field");
  const expenses = totalExpenses(income);
  if (income < expenses) {
    alert("You don't have sufficient balance");
  } else {
    const remain = income - expenses;
    setInnerTextOfElement("total-expenses", expenses);
    setInnerTextOfElement("remaining-balance", remain);
  }
});

document.getElementById("btn-save").addEventListener("click", function () {
  const income = getInputValueFromElement("income-field");
  const expenses = totalExpenses(income);
  const remain = income - expenses;
  const saving = getInputValueFromElement("save-field");
  const totalSaving = (income * saving) / 100;
  const remainBalance = remain - totalSaving;
  if (totalSaving > remainBalance) {
    alert("Make sure you spending less than your savings");
  } else {
    setInnerTextOfElement("s-amount", totalSaving);
    setInnerTextOfElement("s-balance", remainBalance);
  }
});
