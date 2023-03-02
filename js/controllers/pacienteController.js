//Importação da classe Paciente
import { ListaPacietes } from "../models/listaPacientes.js";
import { Paciente } from "../models/paciente.js";

export class PacienteController{
    //atributos privados (referente aos campos da tag "form" do HTML)
    #campoNome;
    #campoSobrenome;
    #campoPeso;
    #campoAltura;
    #listaPacientes = new ListaPacietes();

    constructor(){
        //Pegando os campo, não o valor. Por isso não precisa do ".value".
        this.#campoAltura = document.getElementById("altura");
        this.#campoNome = document.getElementById("nome");
        this.#campoPeso = document.getElementById("peso");
        this.#campoSobrenome = document.getElementById("sobrenome");
    };
    
    //Métodos -> comportamento (as funções que a classe vai realizar)
    criarPaciente(){
        let nome = this.#campoNome.value;
        let sobrenome = this.#campoSobrenome.value;
        let peso = this.#campoPeso.value;
        let altura = this.#campoAltura.value;
        let paciente = new Paciente(nome, sobrenome, peso, altura);
        this.#listaPacientes.adicionar(paciente);
        console.log(this.#listaPacientes.pacientes);//
    };

    
};