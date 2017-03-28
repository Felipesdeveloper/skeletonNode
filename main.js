"use strict"; //javaScript escrito de uma forma melhor, mais correto
var express = require('express');//falando que ele vamos precisamos do express aquele framework node que instalamos
var http = require('http');//estamos falando para ele que vamos precisar de um servidor web que vai subir junto com o expree
var app = express();//estou falando que todo meu app(aplicativo inteiro, ele é o controller que é controlado pelo express) vai ser controlado pelo express
var mustacheExpress = require('mustache-express');//pesquisar o que faz

// middlewares engine(é o cerebro que var ser a inteligencia que vai contralar tudo)
app.engine('mustache', mustacheExpress());//estamos craindo uma inteligencia do mustache e falando que ele vai utilizar o mustache-express
app.set('view engine', 'mustache');//usar o htmlque vai vir de mustache
app.set('views', __dirname + '/resources/views');//estamos falando apra ele que todo os nossos codigos html que a view precisa estará aqui
app.use(express.static(__dirname + '/resources/views'));//estamos informando que estes arquivos serão estaticos
app.use('/assets', express.static(__dirname + '/assets'));//estamos falando que todo o codigo do assets ele precisar estara dentro da pasta assets e será estatico
app.use('/modules', express.static(__dirname + '/node_modules'));//estamos falando que todos os nossos modulos estão dentro da pasta node_modules e estamos falando que este arquivo tambem é estatico

// Application Routes
var routes = require('./routes')//criamos a rotas para o navegador saber onde buscar os arquivos, este arquivo é um arquivo .js, mas para o node não precisamos informar a extenção do arquivo.
routes.set(app);//estamos falando que

app.listen(3000, function(){//criado o servidor web,na porta 3000 mil, estamos falando para ele escular está pasta
    console.log('http://localhost:3000');
});
