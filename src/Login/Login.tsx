import React, { Component, ChangeEvent } from 'react';
import { emailChange, passwordChange, authChange } from './redux/actions'
import { LoginState } from './redux/types'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { IAppState } from '../CombineReducers';

interface State {
  emailChange: typeof emailChange
  passwordChange: typeof passwordChange
  authChange: typeof authChange

  loginState: LoginState
}
interface StateProps {
  state: IAppState
}
interface DispatchProps {
  emailChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  passwordChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  authChange: (newValue: boolean) => void;
}
interface OwnProps { 

} 
type Props = StateProps & DispatchProps & OwnProps

class Login extends Component<Props, State> {
  render() {
    return (
      <div>
        {this.props.state.login.email}
        {this.props.state.login.password}
        {this.props.state.login.authenticated}
        <div>
          <input type="text" onChange={this.props.emailChange} placeholder="User Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
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
        authChange: (e: boolean) => {dispatch(authChange(e))}
    }
  }

  export default connect<StateProps, DispatchProps, OwnProps, IAppState>(mapStateToProps, mapDispatchToProps)(Login)
