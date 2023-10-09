//! esperas "await" somente são aceitas dentro de funções "functions" assíncronas "async", e após o uso de um await envolvendo o elemento devemos continuar usando await sempre que o elemento estiver envolvido a frente;
async function busca_endereco () {
    var consulta_cep = await fetch("https://viacep.com.br/ws/01001000/json/"); //! requisição;
    var consulta_cep_convertida = await consulta_cep.json();
    console.log(consulta_cep_convertida);
};
busca_endereco();
// .then((resposta) => resposta.json()) //! pegar o que essa requisição me favorece e transformar em JSON (resposta);
// .then((r) => { 
//     if (r.erro) {
//         throw Error("Esse cep não existe!") //! "if" se erro existir na resposta então defina o erro como essa string;
//     } else {
//         console.log(r) //! caso nenhum erro exista, apenas imprima a resposta;z
//     }
// })
// .catch((erro) => console.log(erro)) //! pega (literalmente pega pois ele busca pelo "erro") o erro definido e imprimi na tela;
// .finally((resultado) => console.log("Requisição feita por completo.")); //! "finally" finalmente/no final pela resposta, de qualquer modo imprina na tela essa string;

console.log(consultaCep);

function soma (num1, num2) {
    return num1 + num2;
};

console.log(soma(10, 20));

//! arrow function
const somando = numero1 => numero1 + 10; //! se tem apenas um parametro não precisa de parênteses e após a seta "=>" se da o resultado assim como um "return" de functions normais; 
const somando2 = (numerado1, numerado2) => numerado1 + numerado2; //! com mais de um parametro o parênteses é necessário;

console.log(somando(10));