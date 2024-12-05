document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const backToWelcome = document.getElementById("backToWelcome");
    const backToWelcomeFromRegister = document.getElementById("backToWelcomeFromRegister");

    const welcomeSection = document.querySelector(".welcome-section");
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");

    // Mostrar a tela de login
    loginButton.addEventListener("click", () => {
        welcomeSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });

    // Mostrar a tela de cadastro
    registerButton.addEventListener("click", () => {
        welcomeSection.classList.add("hidden");
        registerSection.classList.remove("hidden");
    });

    // Voltar para a tela de boas-vindas a partir do login
    backToWelcome.addEventListener("click", () => {
        loginSection.classList.add("hidden");
        welcomeSection.classList.remove("hidden");
    });

    // Voltar para a tela de boas-vindas a partir do cadastro
    backToWelcomeFromRegister.addEventListener("click", () => {
        registerSection.classList.add("hidden");
        welcomeSection.classList.remove("hidden");
    });
});
