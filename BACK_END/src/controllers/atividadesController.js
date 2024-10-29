const Atividades = require('../models/create_atividades');   
const status = require('http-status');

//inserir os dados no banco
exports.Insert = (req, res, next) => {
     //na requisicao de insert ele retorna um json no corpo
     //precisamos pegar cada dados e inserir na respectiva propriedade
     const gabarito = req.body.gabarito;
     const corretas = req.body.corretas;

         //aqui passa os parametros com dados para os atributos do model
         //  create é o metodo insert feito pelo sequelize
         Atividades.create({
             gabarito: gabarito,
             corretas: corretas
         })
         //then = registra o que queremos que aconteca quando a Promise for resolvida
         .then(atividades => {
             if(atividades){
                 res.status(status.OK).send(atividades);
             }else {
                 res.status(status.NOT_FOUND).send();
             }
         })
         // //catch = registra o que queremos que aconteca quando a Promise falhar
         .catch(error => next(error));
 };

 exports.Total = (req, res, next) => {
    Atividades.findAll()
        .then(atividades => {
            if(atividades) {
                res.status(status.OK).send(atividades);
            }
        })
        .catch(error => next(error));
};



