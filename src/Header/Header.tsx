import React, { Component } from 'react';
import * as StylesSheet from './HeaderStyle'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { IAppState } from '../App/CombineReducers';
import { HeaderState } from './redux/types'
import { showModalLogin, showModalCriarConta } from './redux/actions'
import { sideMenuShow } from '../SideMenu/redux/actions'
import { authChange } from '../Login/redux/actions'
import './Header.css'

interface State {
  showModalLogin: typeof showModalLogin
  showModalCriarConta: typeof showModalCriarConta

  headerState: HeaderState
}
interface StateProps {
  state: IAppState
}
interface DispatchProps {
  showModalLogin: (newValue: boolean) => void;
  showModalCriarConta: (newValue: boolean) => void;
  sideMenuShow: (newValue: boolean) => void
  authChange: (newValue: boolean) => void;
}
interface OwnProps { 

} 
type Props = StateProps & DispatchProps & OwnProps
class Header extends Component<Props, State> {
    render() {
      return (
        <StylesSheet.HeaderStyle>
            <header className="header">
            <div className="container header-flex">
              <div className="item menu-button">
                <button onClick={() => this.props.sideMenuShow(!this.props.state.sideMenu.sideMenuShow)}>Menu</button>
              </div>
              <div className="header-center"></div>
              <div className="item login-buttons">
                {!this.props.state.login.authenticated && 
                  <section>
                    <button onClick={() => this.props.showModalCriarConta(true)}>Criar Conta</button>  
                    <button onClick={() => this.props.authChange(true)}>Login </button> 
                  </section>
                }
                {this.props.state.login.authenticated && 
                  <section>
                    <button onClick={() => this.props.authChange(false)}>Sair</button>
                  </section>
                }

              </div>
            </div>
          </header>
        </StylesSheet.HeaderStyle>
      )
    };
  }
  const mapStateToProps = (states: IAppState, ownProps: OwnProps): StateProps => {
    return {
      state: states 
    }
  }
  const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
    return {
          showModalLogin: (e: boolean) => {dispatch(showModalLogin(e))},
          showModalCriarConta: (e: boolean) => {dispatch(showModalCriarConta(e))},
          sideMenuShow: (e: boolean) => {dispatch(sideMenuShow(e))},
          authChange: (e: boolean) => {dispatch(authChange(e))}
      }
    }
  
export default connect<StateProps, DispatchProps, OwnProps, IAppState>(mapStateToProps, mapDispatchToProps)(Header)
  