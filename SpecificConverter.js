var csv = require('csv'); 

// carrega o csv referenciado acima.

​

var obj = csv(); 

// obtem o csv para acessar a funcionalidade pedida

​
function MyCSV(fullname, eid, class, class, email_Responsável_Pai, phone_Pai, phone_Responsável_Mãe, email_Mãe, email_Aluno, phone_Aluno, invisible, see_all){
	this.fullname = fullname;
	this.eid = eid;
	this class = class;
	this class = class;
	this email_Responsável_Pai = "email Responsável, Pai";
	this phone_Pai	= phone Pai;
	this phone_Responsável_Mãe = "phone Responsável, Mãe";
	this email_Mãe = email Mãe;
	this email_Aluno = email Aluno;
	this phone_Aluno = phone Aluno;
	this invisible = invisible;
	this see_all = see_all;
}; 

// Define um construtor com parametros que vai ser usado para armazenar os dados lidos do csv para o array. Usado para definir quais campos mostrar abaixo.	

var MyData = []; 

//Array com dados do csv que sera enviado para o HTTP	 
​

obj.from.path('input.csv').to.array(function (data) {

    for (var index = 0; index < data.length; index++) {

        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2], data[index][3], data[index][4], data[index][5], data[index][6], data[index][7], data[index][8], data[index][9], data[index][10], data[index][11]));

    }

    console.log(MyData);

});

//Le o arquivo csv do caminho especificado e os dados sao armazenaods num array usando uma função callback

var http = require('http');

//Carrega o modulo HTTP

​

var server = http.createServer(function (req, resp) {

    resp.writeHead(200, { 'content-type': 'application/json' });

    resp.end(JSON.stringify(MyData));

});
// Cria um webserver que escreve a resposta com o conteudo em formato json
​

server.listen(8080);

