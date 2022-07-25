class Livro {
    constructor(nome, lançamento, assunto){
      this.nome = nome;
      this.lançamento = lançamento;
      this.assunto = assunto; 
    }
    
    mostraLivro () {
      console.log(this.nome);
    }
    
  }
  
  const genesis = new Livro("Gênesis no espaço tempo", "2008", "Teologia e genesis");
  genesis.mostraLivro();
  
  
  class LivroColeção extends Livro{
    constructor(nome, assunto, idade){
      super(nome, assunto);
      this.idade = idade;
    }
    
    mostrarIdade(){
      console.log(this.idade);
    }
    
    mostrarAssunto(){
      console.log(this.assunto);
    }
  }
  
  const Êxodo = new LivroColeção ("Êxodo", "Libertação do povo de isrrael", 1000)
  
  Êxodo.mostraLivro();
  Êxodo.mostrarIdade();
  