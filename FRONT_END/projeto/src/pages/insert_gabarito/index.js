import React, { Component } from 'react';
import Gabarito from './gabarito';
import ListGab from './lista_gabarito';
import './gabarito.css';

class GabaritoPage extends Component {
    render() {
        return (
            <div>
              <Gabarito />
              <div className="teste">
                  <p>Lista de Gabaritos Cadastrados</p>
              <ListGab />
              </div>
            </div>
        );
    }
}
export default GabaritoPage;