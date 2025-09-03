let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const list = document.getElementById("list");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const addBtn = document.getElementById("addBtn");

function render() {
  list.innerHTML = "";
  let income = 0, expense = 0;
  transactions.forEach((t, i) => {
    let li = document.createElement("li");
    li.className = t.type;
    li.innerHTML = `${t.desc} - $${t.amount}
      <button onclick="remove(${i})">X</button>`;
    list.appendChild(li);
    t.type === "income" ? income += t.amount : expense += t.amount;
  });
  balanceEl.textContent = income - expense;
  incomeEl.textContent = income;
  expenseEl.textContent = expense;
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

addBtn.onclick = () => {
  if (!desc.value || !amount.value) return;
  transactions.push({
    desc: desc.value,
    amount: +amount.value,
    type: type.value
  });
  desc.value = amount.value = "";
  render();
};

function remove(i) {
  transactions.splice(i, 1);
  render();
}

render();
