class Cliente{
    constructor(nome, sobrenome, email, idade, cpf, saldo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.idade = idade;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.table(`${this.nome} ${this.sobrenome} ${this.saldo}`);
    }
}

class ClienteCredido extends Cliente {
    constructor(nome, sobrenome, email, idade, cpf, saldo, saldoCredito){
        super(nome, sobrenome, email, idade, cpf, saldo);
        this.saldoCredito = saldoCredito;
    }

    limiteDisponível() {
        console.log(this.saldoCredito);
    }

    usarCredito(valor){
        if(valor > this.saldoCredito){
            console.log('Err - Transação não aprovada');
        }
        else{
            this.saldoCredito -= valor;
            console.log(`Transação aprovada - Saldo atual: ${this.saldoCredito}`);
        }
    
    }

}

const cliente1 = new ClienteCredido("Henrique", "Beserra", "henriquebeserra@gmail.com",22, "00099988812",50, 1000);

cliente1.limiteDisponível();
cliente1.usarCredito(200);
