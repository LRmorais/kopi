import React, { Component } from 'react';
import './time.css';

class Time extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempos: {
                time: [],
            }
            
        }
    }
    
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label For="time">Tempo</label>  
                        <select className="seletor" id="time" name="time"
                            required
                            value={this.state.tempos.time} 
                            onChange={this.handleInputChange}>
                                <option value="" disabled selected>Select Time</option>
                                <option value="25">25 segundos</option> 
                                <option value="120">2 minutos</option>
                                <option value="180">3 minutos</option>
                                <option value="300">5 minutos</option>
                            </select>
                            <button className="btnSeletor" type="submit">Ok</button>
                    </div>
                    
            </form>
        );
    }

    handleInputChange = event =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            tempos: {...prevState.tempos, [name]: value}
        }));
    }
    handleSubmit = event =>{
        fetch("http://localhost:3003/sistema/api/tempo",{
            method: "post",
            body: JSON.stringify(this.state.tempos),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => {
            if(data.ok){
                window.alert('Tempo Cadastrado')
                window.location.reload(false);
            }
        }) 
        event.preventDefault();
    }
}

export default Time;