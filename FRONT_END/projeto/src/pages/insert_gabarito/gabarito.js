import React, { Component } from 'react';
import './gabarito.css';
import {Link} from 'react-router-dom';


class CriarGabarito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            atividade: {
                gabarito: [],
            }
            
        }
    }
    
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <article className="gab">
                    <legend>Questão</legend>
                    <div className="gabarito-insert">
                        <label For="gabarito">Gabarito</label> |   
                        <select className="gabarito" id="gabarito" name="gabarito"
                            required
                            value={this.state.atividade.gabarito} 
                            onChange={this.handleInputChange}>
                                <option value="" disabled selected>Selecione uma opção</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                            <br />
                    </div>
                    <button type="submit" onClick={() => this.handleIncrement()}>Enviar</button> |
                    <button><Link to={`/`}style={{ textDecoration: 'none', color:'black'}}>Voltar</Link></button>
                    </article>
            </form>
        );
    }

    
    handleIncrement(){
        window.location.reload(false);
    }

    handleInputChange = event =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            atividade: {...prevState.atividade, [name]: value}
        }));
    }
    handleSubmit = event =>{
        fetch("http://localhost:3003/sistema/api/gabaritos",{
            method: "post",
            body: JSON.stringify(this.state.atividade),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => {
            if(data.ok){
                window.alert('Resposta enviada')
            }
        }) 
        event.preventDefault();
    }
}

export default CriarGabarito;