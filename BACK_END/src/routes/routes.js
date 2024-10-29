const express = require('express');
const router = express.Router();

const alunos = require('../controllers/alunosController');
const atividades = require('../controllers/atividadesController');
const tempo = require('../controllers/tempoController');


// alunos -------------------------------------------------------->
router.get('/api/alunos', alunos.SearchAll);
// router.get('/usuarios/:id', UsuarioController.SearchOne);
// router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/api/alunos/:id', alunos.Delete);

// Gabarito-------------------------------------------------------->
router.post('/api/gabaritos', atividades.Insert);
router.get('/api/gabaritos', atividades.Total);
// Tempo ---------------------------------------------------------->
router.post('/api/tempo', tempo.InsertTempo);
router.put('/api/tempo/:id', tempo.UpdateAtivo);
router.get('/api/tempo/:id',tempo.SearchIp);

module.exports = router;