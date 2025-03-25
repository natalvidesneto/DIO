//Criando Métodos dentro do objeto


const objeto = {
    pikachu: 'Pikachu',
    eletrico: function(){
        console.log('Pokemon do tipo eletrico.')
    },
    grama: ()=>{
        console.log("Pokemon do tipo grama.")
    },
    fogo: function(){
        console.log('Pokemon do tipo fogo.')
    },
    apresentação: function(){
        console.log(this.pikachu)
    }
}

objeto.apresentação()
