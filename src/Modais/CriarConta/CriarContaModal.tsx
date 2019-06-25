import React, { Component, ChangeEvent } from 'react';
import { emailChange, passwordChange, confirmPasswordChange, nameChange, birthChange } from './redux/actions'
import { showModalLogin, showModalCriarConta } from '../../Header/redux/actions'
import { CriarContaState } from './redux/types'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { IAppState } from '../../App/CombineReducers';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import './CriarConta.css'

interface State {
  emailChange: typeof emailChange
  passwordChange: typeof passwordChange
  confirmPasswordChange: typeof confirmPasswordChange
  nameChange: typeof nameChange
  birthChange: typeof birthChange
  showModalLogin: typeof showModalLogin
  showModalCriarConta: typeof showModalCriarConta

  criarContaState: CriarContaState
}
interface StateProps {
  state: IAppState
}
interface DispatchProps {
  emailChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  passwordChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  nameChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  birthChange: (newValue: Date) => void;
  showModalLogin: (newValue: boolean) => void;
  showModalCriarConta: (newValue: boolean) => void;
}
interface OwnProps { 

} 
type Props = StateProps & DispatchProps & OwnProps

class CriarContaModal extends Component<Props, State> {
  render() {
    return (
      <div className="modal" id="modal">
        <div>
          Name: <input onChange={this.props.nameChange}></input>
        </div>
        <div>
          Birthday: 
            <DatePicker 
              dateFormat="dd/MM/yyyy" 
              onChange={this.props.birthChange} 
              selected={this.props.state.criarContaModal.birth}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select" 
            />
        </div>
        <div>
          Email: <input onChange={this.props.emailChange}></input>
        </div>
        <div>
          Password: <input type="password" onChange={this.props.passwordChange}></input>
        </div>
        <div>
          Confirm Password: <input type="password" onChange={this.props.confirmPasswordChange}></input>
        </div>
        <div>
          <button onClick={() => this.props.showModalCriarConta(false)}>Close</button>
          <button>Criar Conta</button>
        </div>
      </div>
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
        emailChange: (e: ChangeEvent<HTMLInputElement>) => {dispatch(emailChange(e.target.value))},
        passwordChange: (e: ChangeEvent<HTMLInputElement>) => {dispatch(passwordChange(e.target.value))},
        confirmPasswordChange: (e: ChangeEvent<HTMLInputElement>) => {dispatch(confirmPasswordChange(e.target.value))},
        nameChange: (e: ChangeEvent<HTMLInputElement>) => {dispatch(nameChange(e.target.value))},
        birthChange: (e: Date) => {dispatch(birthChange(e))},
        showModalLogin: (e: boolean) => {dispatch(showModalLogin(e))},
        showModalCriarConta: (e: boolean) => {dispatch(showModalCriarConta(e))}
    }
  }

  export default connect<StateProps, DispatchProps, OwnProps, IAppState>(mapStateToProps, mapDispatchToProps)(CriarContaModal)
