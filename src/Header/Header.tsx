import React, { Component } from 'react';
import * as StylesSheet from './HeaderStyle'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { IAppState } from '../App/CombineReducers';
import { HeaderState } from './redux/types'
import { showModalLogin, showModalCriarConta } from './redux/actions'
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
}
interface OwnProps { 

} 
type Props = StateProps & DispatchProps & OwnProps
class Header extends Component<Props, State> {
    render() {
      return (
        <StylesSheet.HeaderStyle>
          <header className="header">
            <div className="container flex">
              <button onClick={() => this.props.showModalCriarConta(true)}>Criar Conta</button>  
              <button onClick={() => this.props.showModalLogin(true)}>Login </button>  
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
      }
    }
  
export default connect<StateProps, DispatchProps, OwnProps, IAppState>(mapStateToProps, mapDispatchToProps)(Header)
  