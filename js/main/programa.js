import { PacienteController } from "../controllers/pacienteController.js";

const tituloPrincipal = document.getElementById("titulo-principal");
tituloPrincipal.textContent = "Aparecida Nutricionista";

//Pegar as classe dos inputs do HTML
const formulario = document.querySelector(".form");
const controller = new PacienteController();

//Botão submit
formulario.addEventListener("submit", () => {
    event.preventDefault();
    controller.criarPaciente();
});