import React, { Component, ChangeEvent } from 'react';
import { nomeChange, sobrenomeChange, idadeChange } from './redux/actions'
import { DashboardState } from './redux/types'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { IAppState } from '../CombineReducers';
import { Link } from 'react-router-dom'
import { authChange } from '../Login/redux/actions';

interface State {
  nomeChange: typeof nomeChange
  sobrenomeChange: typeof sobrenomeChange
  idadeChange: typeof idadeChange
  authChange: typeof authChange
  dashboardState: DashboardState
}
interface StateProps {
  state: IAppState
}
interface DispatchProps {
  nomeChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  sobrenomeChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  idadeChange: (newValue: ChangeEvent<HTMLInputElement>) => void;
  authChange: (newValue: boolean) => void;
}
interface OwnProps { 

} 
type Props = StateProps & DispatchProps & OwnProps


class Dashboard extends Component<Props, State> {
    render() {
      return (
        <div>
          <div>
            Olá, sou o dashboard
          </div>
            <Link to="/">
              <button type="button" onClick={() => this.props.authChange(false)}>
                Logout
             </button>
           </Link>
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
          nomeChange: (e: ChangeEvent<HTMLInputElement>) => {dispatch(nomeChange(e.target.value))},
          sobrenomeChange: (e: ChangeEvent<HTMLInputElement>) => {dispatch(sobrenomeChange(e.target.value))},
          idadeChange: (e: ChangeEvent<HTMLInputElement>) => {dispatch(idadeChange(e.target.value))},
          authChange: (e: boolean) => {dispatch(authChange(e))}
      }
    }
  
export default connect<StateProps, DispatchProps, OwnProps, IAppState>(mapStateToProps, mapDispatchToProps)(Dashboard)
