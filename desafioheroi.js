class personagem{
    constructor(nome,idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo =  tipo
    }
    
    atacar(){
        if (this.tipo === 'guerreiro'){
            console.log(this.tipo +  " atacou usando ESPADA"  )
        }
        else if (this.tipo === 'mago'){
            console.log(this.tipo +  " atacou usando MAGIA"  )
        }
        else if (this.tipo === 'monge'){
            console.log(this.tipo +  " atacou usando Artes Marcias"  )
        }
        else if (this.tipo === 'ninja'){
            console.log(this.tipo +  " atacou usando shuriken"  )
        }
    }

}


let guerreiro = new personagem("ronaldo",25,"guerreiro")
guerreiro.atacar()

let mago = new personagem("ronaldo",25,"mago")
mago.atacar()

let monge = new personagem("ronaldo",25,"monge")
monge.atacar()

let ninja = new personagem("ronaldo",25,"ninja")
ninja.atacar()





