// entrada
let stringOriginal = "Olá, mundo!"

function inverterString(str) {
    let stringInvertida = ""

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]
    }
    
    return stringInvertida
}

let stringInvertida = inverterString(stringOriginal)
console.log("String original:", stringOriginal)
console.log("String invertida:", stringInvertida)