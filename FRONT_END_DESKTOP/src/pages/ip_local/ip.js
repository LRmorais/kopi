import React, { Component } from 'react';


class Ip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempos: []
        }
    }

    // fetch vai buscar os dados dos alunos no endereço do backend
    componentDidMount() {
        fetch(`http://localhost:3003/sistema/api/tempo/1`)
            .then(tempos =>
                tempos.json().then(tempos => this.setState({ tempos }))
            )
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
              });
    }

    render() {
        const { tempos } = this.state;
        return(
            <div style={{borderRadius:'20px', backgroundColor: 'red',padding:'3px', margin:'5px'}}>
                <label>Ip do Professor: </label>
                {tempos.ip}
            </div>
        )
    }
}
export default Ip;