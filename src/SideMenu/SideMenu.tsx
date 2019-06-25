import React, { Component } from 'react';
import * as StylesSheet from './SideMenuStyle'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { IAppState } from '../App/CombineReducers';
import { sideMenuShow } from './redux/actions'
import { SideMenuState } from './redux/types'

interface State {
  sideMenuShow: typeof sideMenuShow

  sideMenuState: SideMenuState
}
interface StateProps {
  state: IAppState
}
interface DispatchProps {
  sideMenuShow: (newValue: boolean) => void;
}
interface OwnProps { 

} 
type Props = StateProps & DispatchProps & OwnProps

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
const mapStateToProps = (states: IAppState, ownProps: OwnProps): StateProps => {
  return {
    state: states 
  }
}  

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
        sideMenuShow: (e: boolean) => {dispatch(sideMenuShow(e))}
    }
  }

export default connect<StateProps, DispatchProps, OwnProps, IAppState>(mapStateToProps, mapDispatchToProps)(SideMenu)
