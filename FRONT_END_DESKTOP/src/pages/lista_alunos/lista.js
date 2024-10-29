import React, { Component } from 'react';
import '../lista_alunos/lista.css';
import {Link} from 'react-router-dom';

class ListaAlunos extends Component {
    // alunos vai receber os dados que estão na tabela alunos do BD
    constructor(props) {
        super(props);
        this.state = {
            alunos: []
        }
    }

    // fetch vai buscar os dados dos alunos no endereço do backend
    componentDidMount() {
        fetch(`http://localhost:3003/sistema/api/alunos`)
            .then(alunos =>
                alunos.json().then(alunos => this.setState({ alunos }))
            )
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
              });
    }


    render() {
        // busca os dados que foram armazenados no estado e armazena na const
        const { alunos } = this.state;
        return alunos.map((alunos, index) => (
            <div className="Lista">
                    <div key={index}>                    
                        <article>
                        <strong>Nome:</strong> {alunos.nome}<br/>
                        <strong>Email:</strong> {alunos.email}<br/>
                        <strong>Total de Acertos:</strong> {alunos.acertos}
                        <ul className="opcoes">
                            <li><Link to={`/`}style={{ textDecoration: 'none', color: '#7159c1'}}>Voltar</Link></li>
                            <li><Link to={`/deletarAluno/${alunos.id}`}style={{ textDecoration: 'none', color: '#7159c1'}}>Deletar</Link></li>
                        </ul>
                        </article>
                        
                </div>
                
            </div>
            
        ))
    }
}


export default ListaAlunos;