document.addEventListener("DOMContentLoaded", () => {
    // Dados de exemplo
    const procedimentos = ["Corte de Cabelo", "Coloração", "Manicure", "Hidratação"];
    const atendimentos = [20, 15, 30, 10];
    const faturamento = [400, 600, 450, 200];

    // Gráfico de Pizza - Número de Atendimentos por Procedimento
    const ctxProcedimentos = document.getElementById("procedimentosChart").getContext("2d");
    new Chart(ctxProcedimentos, {
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
    new Chart(ctxFaturamento, {
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
});
