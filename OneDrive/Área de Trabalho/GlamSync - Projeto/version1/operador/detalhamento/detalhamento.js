document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.getElementById("filter-btn");
    const detailsTable = document.getElementById("details-table");

    const sampleData = [
        { procedimento: "Corte de Cabelo", cliente: "Ana", data: "2024-01-15", valor: 50 },
        { procedimento: "Coloração", cliente: "João", data: "2024-02-10", valor: 150 },
        { procedimento: "Manicure", cliente: "Maria", data: "2024-03-05", valor: 30 },
        { procedimento: "Hidratação", cliente: "Lucas", data: "2024-04-01", valor: 80 }
    ];

    function renderTable(data) {
        if (data.length === 0) {
            detailsTable.innerHTML = "<p>Nenhum dado encontrado para os filtros aplicados.</p>";
            return;
        }
        
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Procedimento</th>
                        <th>Cliente</th>
                        <th>Data</th>
                        <th>Valor (R$)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        data.forEach(item => {
            tableHTML += `
                <tr>
                    <td>${item.procedimento}</td>
                    <td>${item.cliente}</td>
                    <td>${item.data}</td>
                    <td>${item.valor}</td>
                </tr>
            `;
        });
        tableHTML += "</tbody></table>";
        detailsTable.innerHTML = tableHTML;
    }

    filterBtn.addEventListener("click", () => {
        const procedure = document.getElementById("select-procedure").value;
        const startDate = document.getElementById("date-start").value;
        const endDate = document.getElementById("date-end").value;

        const filteredData = sampleData.filter(item => {
            const matchProcedure = procedure === "all" || item.procedimento === procedure;
            const matchDate = (!startDate || item.data >= startDate) && (!endDate || item.data <= endDate);
            return matchProcedure && matchDate;
        });

        renderTable(filteredData);
    });

    renderTable(sampleData); // Renderizar com os dados iniciais
});
