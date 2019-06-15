import React, { Component } from 'react';
import * as StylesSheet from './SideMenuStyle'

class SideMenu extends Component {
    render() {
      return (
        <StylesSheet.SideMenuStyle>
          <div>
            <label>Item1</label>
          </div>
          <div>
            <label>Item2</label>
          </div>
          <div>
            <label>Item3</label>
          </div>
        </StylesSheet.SideMenuStyle>
      )
    };
  }
  
export default SideMenu
