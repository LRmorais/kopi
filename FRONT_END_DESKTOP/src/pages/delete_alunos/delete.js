import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../delete_alunos/delete.css';

class DeleteAluno extends Component {
    constructor(props) {
        super(props);
        this.state= {
            alunos: {},
            redirect: false
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://localhost:3003/sistema/api/alunos/${id}`)
        .then(data => {
            data.json().then(data =>{
                this.setState({alunos: data});
            });
        })
            
    }
    
    render() {
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to="/principal" />
        }else {
            return (
                <fieldset>
                    <legend>Deletar Aluno</legend>
                    <div className="aluno-delete">
                        <label htmlFor="nome">{this.state.alunos.nome}</label>
                        <p>Tem certeza que deseja deletar esse registro?</p>
                        <button onClick={this.hundleClick}>Remover</button>
                        <br/> <br/>
                        <Link to={`/principal`}>Voltar</Link>
                    </div>
                </fieldset>
            )
        }

    }
    hundleClick = event => {
        const {id} = this.props.match.params;

        fetch(`http://localhost:3003/sistema/api/alunos/${id}`, {
            method: "delete"
        })
        .then(data => {
            if(data.ok){
                this.setState({redirect: true})
            }
        })
        event.preventDefault();
    };
}

export default DeleteAluno;