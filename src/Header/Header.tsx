import React, { Component } from 'react';
import * as StylesSheet from './HeaderStyle'

class Header extends Component {
    render() {
      return (
        <StylesSheet.HeaderStyle>
          <header className="header">
            Olá, sou o header 
          </header>
        </StylesSheet.HeaderStyle>
      )
    };
  }
  
export default Header
