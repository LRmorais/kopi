const Tempo = require('../models/create_tempo');   
const status = require('http-status');

//inserir os dados no banco
exports.InsertTempo = (req, res, next) => {
     //na requisicao de insert ele retorna um json no corpo
     //precisamos pegar cada dados e inserir na respectiva propriedade
     const time = req.body.time;

         //aqui passa os parametros com dados para os atributos do model
         //  create é o metodo insert feito pelo sequelize
         Tempo.create({
             time: time,
         })
         //then = registra o que queremos que aconteca quando a Promise for resolvida
         .then(Tempo => {
             if(Tempo){
                 res.status(status.OK).send(Tempo);
             }else {
                 res.status(status.NOT_FOUND).send();
             }
         })
         // //catch = registra o que queremos que aconteca quando a Promise falhar
         .catch(error => next(error));
 };

  //atualizar os dados
exports.UpdateAtivo = (req, res, next) => {
     //na requisicao de atualizar
     //quando atualizamos enviamos o id, que vai ser pego da url
     const id = req.params.id;
     const ativo = req.body.ativo;

     Tempo.findByPk(id)
         //primeiro precisamos verificar se o dado existe
         //then = registra o que queremos que aconteca quando a Promise for resolvida
         .then(Tempo => {
             if (Tempo) {
                 //se existir, vai atualizar
                 //passa um objeto com as infos
                 Tempo.update({
                    ativo: ativo
                 },
                     //recebe um parametro id na clausula where
                     {
                         where: { id: id }
                     })
                     .then(() => {
                         //status 200 é o padrao
                         res.status(status.OK).send();
                     })
                     .catch(error => next(error));
             } else {
                 //caso nao existir, retorna erro
                 res.status(status.NOT_FOUND).send();
             }
         })
         //catch = registra o que queremos que aconteca quando a Promise falhar
         .catch(error => next(error));
 };

//  buscar o ip local do usuario
 exports.SearchIp = (req, res, next) => {
    const id = req.params.id;

    Tempo.findByPk(id)
        .then(tempo => {
            if (tempo) {
                res.status(status.OK).send(tempo);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};