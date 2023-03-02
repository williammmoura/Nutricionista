//Criando uma classe.
export class Paciente {
    //Encapsulamento dos atributos (os atributos, que antes era público, agora passa ser privado)
    #nome;
    #sobrenome;
    #peso;
    #altura;
    
    //Construtor
    constructor(nome, sobrenome, peso, altura){
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#peso = peso;
        this.#altura = altura;
    };

    //Criando a propriedade "nome"
    get nome(){ //Não será alterado (somente "get")
        return this.#nome;
    };
    get sobrenome(){ //Não será alterado (somente "get")
        return this.#sobrenome;
    };
    get peso(){
        return this.#peso;
    };
    //"Peso" pode ser alterado, então vamos buscar #peso (set)
    set peso(novoPeso){
        this.#peso = novoPeso;
    }
    get altura(){ //Não será alterado (somente "get")
        return this.#altura;
    };
};