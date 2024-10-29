import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Principal from './pages/principal/index';
import Lista from './pages/lista_alunos/lista';
import ListaGabarito from './pages/insert_gabarito/index';
import Delete from './pages/delete_alunos/delete';

const Routes = () => (
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Principal} />
                <Route exact path="/alunos" component={Lista} />
                <Route exact path="/gabaritos" component={ListaGabarito} />
                <Route path="/deletarAluno/:id" component={Delete} />
            </main>
        </div>
    </Router>
)

export default Routes;