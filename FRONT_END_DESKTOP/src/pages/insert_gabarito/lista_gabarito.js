import React, { Component } from 'react';
import './gabarito.css';

class lista_gabarito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            atividade: []
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3003/sistema/api/gabaritos`)
            .then(atividade =>
                atividade.json().then(atividade => this.setState({ atividade }))
            )
    }

    render() {
        const { atividade } = this.state;
            return atividade.map((atividade, index) => (
                <div className="listGab">
                    <div key={index}>   
                        {atividade.id} - {atividade.gabarito}
                    </div>
                </div>
            )
        )
    }
}

export default lista_gabarito;
