import React, { Component } from 'react';
import './index.css';
import Grafico from '../chartjs/chart';
import { Link } from 'react-router-dom';
import Tempo from '../insert_time/time';
import Ativo from '../insert_ativo/ativo';
import Ip from '../ip_local/ip';

class Principal extends Component {

    render() {
        return (
            
                <div className="container">
                    <Ip />
                    <header className="cabeçalho">
                        <ul className="itens">
                            <li><Ativo /></li>
                            <li><Tempo /></li> |
                            {/* <li>Principal</li> | */}
                            <li><Link to={`/alunos`}style={{ textDecoration: 'none', color: '#7159c1'}}>Alunos Cadastrados</Link></li>|
                            <li><Link to={`/gabaritos`}style={{ textDecoration: 'none', color: '#7159c1'}}>Gabarito</Link></li>
                        </ul>
                    </header>
                    <aside className="graficos">
                        <Grafico />
                    </aside>
                </div>
        );
    }
}

export default Principal;