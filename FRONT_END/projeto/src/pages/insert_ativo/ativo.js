import React, { Component } from 'react';


class Ativo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempos: {
                ativo: [],
            }
        }
    }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label For="ativo">Play/Pause</label>  
                        <select className="seletor" id="ativo" name="ativo"
                            required
                            value={this.state.tempos.ativo} 
                            onChange={this.handleInputChange}>
                                <option value="" disabled selected>Play/Pause</option>
                                <option value="1">Play</option> 
                                <option value="0">Pause</option>
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
        fetch("http://localhost:3003/sistema/api/tempo/1",{
            method: "put",
            body: JSON.stringify(this.state.tempos),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => {
            if(data.ok){
                window.alert('Done')
            }
        }) 
        event.preventDefault();
    }
}

export default Ativo;