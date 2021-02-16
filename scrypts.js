const Modal = {
    open() {
        document.querySelector(".modalOverlay").classList.add("active");
    },
    close() {
        document.querySelector(".modalOverlay").classList.remove("active");
    },
};

const transactions = [{
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "23/01/2021",
    },
    {
        id: 2,
        description: "Website",
        amount: 500000,
        date: "23/01/2021",
    },
    {
        id: 1,
        description: "Internet",
        amount: -200000,
        date: "23/01/2021",
    },
];

const transaction = {
    incomes() {
        //somar todas as entradas
    },
    expenses() {
        //somar todas as saídas
    },
    total() {
        //diminuir total de saídas do total das entradas
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

        // const amount = 

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td class="dell">
            <img src="./assets/minus.svg" alt="Excluir Transação">
        </td>
    `;

        return html;
    },
};

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
    }
}


transactions.forEach((transaction) => {
    DOM.addTransaction(transaction);
});