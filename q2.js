// entrada
let index = 18

// variaveis auxiliares
let valor1 = 0
let valor2 = 1
let proximoValor = 0

// condições
let seguir = true
let pertence = false





while(seguir) {
    if(index<=proximoValor) {
        seguir=false

        if(index==proximoValor) {
            pertence= true
        }
    }
    
    console.log(proximoValor)
    proximoValor = valor1 + valor2
    valor2 = valor1
    valor1 = proximoValor
}

console.log(`A entrada pertence a sequencia de fibonacci: ${pertence}`)