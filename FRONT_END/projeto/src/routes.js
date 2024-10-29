import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from './pages/principal/index';
import Lista from './pages/lista_alunos/lista';
import Delete from './pages/delete_alunos/delete';
import ListaGabarito from './pages/insert_gabarito/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Principal} />
            <Route exact path = "/alunos" component={Lista} />
            <Route path = "/deletarAluno/:id" component={Delete}/>
            <Route exact path = "/gabaritos" component={ListaGabarito} />            
        </Switch>
    </BrowserRouter>
)

export default Routes;