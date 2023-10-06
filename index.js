// Template strings são literais string que permitem expressões embutidas. Você pode usar string multi-linhas e interpolação de string com elas.

let nome = "Paulo"
let idade = 26
let cidade = "BSB"
//No código acima, criamos algumas variáveis e atribuímos valores a elas.

//No console, utilizamos crase para conseguir atribuir as variáveis sem concatenar com strings. 
//Para tornar a forma mais legível, vamos adotar a sintaxe abaixo.
//`texto string ${expression} texto string`
console.log(`Olá, meu nome é ${nome}, tenho ${idade} e minha cidade é ${cidade}`)


// Podemos também realizar algumas operações dentro de {}. Um exemplo está abaixo:
let primeiroNumero = 2
let segundoNumero = 6

console.log(`Vamor do primeiro número o sehundo é: ${primeiroNumero + segundoNumero}`)

/*
A mensagem é uma string delimitada por crases (``) 
e contém uma expressão dentro de ${}. Isso é chamado de interpolação de string e
 é utilizado para incorporar o resultado de uma expressão dentro da string.
*/





