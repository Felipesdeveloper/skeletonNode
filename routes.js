//aqui estamos criando uma rota(podemos criar varias rotas  para o nosso sistema) para  o navegador saber o que deverá fazer
module.exports.set = function(app) {
    app.use('/', require('./app'));//aqui (na barra) estamos falando para o navegador que quando for acessada a raiz do site (/) ele irá passar para app que é a dona do site e sabe tudo que deverá acontecer feito.
};
