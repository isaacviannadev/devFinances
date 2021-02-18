const Modal = {
    open() {
        document.querySelector(".modalOverlay").classList.add("active");
    },
    close() {
        document.querySelector(".modalOverlay").classList.remove("active");
    },
    open2() {
        document.querySelector(".modalOverlayRemove").classList.add("active");
    },
    close2() {
        document.querySelector(".modalOverlayRemove").classList.remove("active");
    },
    open3() {
        document
            .querySelector(".modalOverlayRemoveConfirm")
            .classList.add("active");
    },
    close3() {
        document
            .querySelector(".modalOverlayRemoveConfirm")
            .classList.remove("active");
    },
};

const transactions = [{
        description: "Luz",
        amount: -50500,
        date: "23/01/2021",
    },
    {
        description: "Website",
        amount: 500000,
        date: "23/01/2021",
    },
    {
        description: "Internet",
        amount: -200000,
        date: "23/01/2021",
    },
];

const Transaction = {
    all: transactions,
    add(transaction) {
        Transaction.all.push(transaction);

        App.reload();
    },

    remove(index) {
        Transaction.all.splice(index, 1);

        App.reload();
    },

    incomes() {
        let income = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount >= 0) {
                income += transaction.amount;
            }
        });

        return income;
    },
    expenses() {
        let expense = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        });

        return expense;
    },
    total() {
        let total = Transaction.incomes() + Transaction.expenses();

        return total;
    },
};

const DOM = {
    transactionsContainer: document.querySelector("#dataTable tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement("tr");
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td class="dell">
            <img src="./assets/minus.svg" onclick="Modal.open2()" alt="Excluir Transação">
        </td>
    `;

        return html;
    },

    updateBalance() {
        document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
            Transaction.incomes()
        );

        document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
            Transaction.expenses()
        );

        document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
            Transaction.total()
        );
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = "";
    },
};

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, "");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        return signal + value;
    },
};

const Form = {
    description: document.querySelector("input#description"),
    description: document.querySelector("input#amount"),
    description: document.querySelector("input#date"),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value,
        };
    },

    validadeField() {
        const { description, amount, date } = Form.getValues();

        if (
            description.trim() === "" ||
            amount.trim() === "" ||
            date.trim() === ""
        ) {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    submit(event) {
        event.preventDefault();

        try {
            Form.validadeField()

        } catch (error) {
            alert(error.message)
        }


    },
};

const App = {
    init() {
        Transaction.all.forEach((transaction) => {
            DOM.addTransaction(transaction);
        });

        DOM.updateBalance();
    },
    reload() {
        DOM.clearTransactions();
        App.init();
    },
};

App.init();