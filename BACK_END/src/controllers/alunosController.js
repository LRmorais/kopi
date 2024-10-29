const Alunos = require('../models/create_alunos');   
const status = require('http-status');

exports.SearchAll = (req, res, next) => {
    Alunos.findAll()
        .then(alunos => {
            if(alunos) {
                res.status(status.OK).send(alunos);
            }
        })
        .catch(error => next(error));
};

 exports.Delete = (req, res, next) => {
     const id = req.params.id;

     Alunos.findByPk(id)
         .then(aluno => {
             if (aluno) {
                 aluno.destroy({
                     where: { id: id }
                 })
                     .then(() => {
                         res.status(status.OK).send();
                     })
                     .catch(error => next(error));
             }
             else {
                 res.status(status.NOT_FOUND).send();
             }
         })
         .catch(error => next(error));
 };