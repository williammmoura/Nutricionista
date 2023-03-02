export class ListaPacietes{
    #pacientes = [];//array vazio para receber novos pacientes.

    //Método para ADICIONAR pacientes
    adicionar(paciente){
        this.#pacientes.push(paciente); //atributo privado
    };
    
    //Criar propriedade
    get pacientes(){
        //return this.#pacientes; // FALHA do JS para deixar o atributo privado. O get retorna a array completo de pacientes podendo ser modificado por fora.

        //PROGRAMAÇÃO DEFENSIVA! Ou seja, será um cópia da lista original.
        return [].concat(this.#pacientes);//"conct" = concatenar.
    };
};