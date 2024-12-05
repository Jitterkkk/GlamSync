document.addEventListener("DOMContentLoaded", () => {
    // Dados de exemplo
    const procedimentos = ["Corte de Cabelo", "Coloração", "Manicure", "Hidratação"];
    const atendimentos = [20, 15, 30, 10];
    const faturamento = [400, 600, 450, 200];

    // Gráfico de Pizza - Número de Atendimentos por Procedimento
    const ctxProcedimentos = document.getElementById("procedimentosChart").getContext("2d");
    const procedimentosChart = new Chart(ctxProcedimentos, {
        type: "pie",
        data: {
            labels: procedimentos,
            datasets: [{
                label: "Número de Atendimentos",
                data: atendimentos,
                backgroundColor: ["#FFC0CB", "#FF69B4", "#FFB6C1", "#DB7093"],
                borderColor: "#6B143E",
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: "top"
                }
            }
        }
    });

    // Gráfico de Barras - Faturamento por Procedimento
    const ctxFaturamento = document.getElementById("faturamentoChart").getContext("2d");
    const faturamentoChart = new Chart(ctxFaturamento, {
        type: "bar",
        data: {
            labels: procedimentos,
            datasets: [{
                label: "Faturamento (R$)",
                data: faturamento,
                backgroundColor: "#DB7093",
                borderColor: "#6B143E",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Faturamento (R$)"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Procedimentos"
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top"
                }
            }
        }
    });

    // Manipulação dos filtros
    const agendamentosFilter = document.getElementById("agendamentos");
    const faturamentoFilter = document.getElementById("faturamento");
    const procedimentosFilter = document.getElementById("procedimentos");

    // Mostrar campos de data para "custom"
    [agendamentosFilter, faturamentoFilter, procedimentosFilter].forEach((filter) => {
        filter.addEventListener("change", (e) => {
            const filterId = e.target.id;
            const dataDiv = document.getElementById(`${filterId}-datas`);
            if (e.target.value === "custom") {
                dataDiv.style.display = "block";
            } else {
                dataDiv.style.display = "none";
            }
        });
    });

    // Quando o filtro for aplicado
    document.getElementById("filters-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const selectedAgendamentos = agendamentosFilter.value;
        const selectedFaturamento = faturamentoFilter.value;
        const selectedProcedimentos = procedimentosFilter.value;

        const dataInicialAgendamentos = document.getElementById("data-inicial").value;
        const dataFinalAgendamentos = document.getElementById("data-final").value;

        const dataInicialFaturamento = document.getElementById("data-inicial-faturamento").value;
        const dataFinalFaturamento = document.getElementById("data-final-faturamento").value;

        const dataInicialProcedimentos = document.getElementById("data-inicial-procedimentos").value;
        const dataFinalProcedimentos = document.getElementById("data-final-procedimentos").value;

        console.log("Filtro Agendamentos:", selectedAgendamentos, "Data:", dataInicialAgendamentos, "a", dataFinalAgendamentos);
        console.log("Filtro Faturamento:", selectedFaturamento, "Data:", dataInicialFaturamento, "a", dataFinalFaturamento);
        console.log("Filtro Procedimentos:", selectedProcedimentos, "Data:", dataInicialProcedimentos, "a", dataFinalProcedimentos);

        // Aqui você pode atualizar os gráficos ou filtrar os dados reais
        updateCharts(selectedAgendamentos, selectedFaturamento, selectedProcedimentos, dataInicialAgendamentos, dataFinalAgendamentos);
    });

    // Função de atualização dos gráficos com base nos filtros
    function updateCharts(agendamentos, faturamento, procedimentos, dataInicialAgendamentos, dataFinalAgendamentos) {
        // Atualize os gráficos com os dados filtrados aqui.
        // Por exemplo, altere os dados dos gráficos dependendo do filtro selecionado.
        // Para este exemplo, estamos apenas exibindo um log para demonstração.
        console.log("Atualizando gráficos com dados filtrados...");
        // Se necessário, altere o conteúdo dos gráficos com novos dados.
    }
});
