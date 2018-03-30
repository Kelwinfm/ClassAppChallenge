//necessario a classe 'csvtojson' que converte 
var Converter = require("csvtojson").Converter;
// cria um novo objeto conversor
var converter = new Converter({});

//chama a função fromFile que leva o pacote para seu arquivo csv como uma função callback
converter.fromFile("./input.csv",function(err,result){
    //se ocorrer um erro, tratar
    if(err){
        console.log("An Error Has Occured");
        console.log(err);  
    } 
    // cria uma variavel chamada json e armazena o resultado da conversao
    var json = result;
    
    // mostra na tela para verificar se funcionou
    console.log(json);
});
