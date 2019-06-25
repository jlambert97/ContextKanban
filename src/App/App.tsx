import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideMenu from '../SideMenu/SideMenu'
import CriarContaModal from '../Modais/CriarConta/CriarContaModal'
import * as MainStyleSheet from './AppStyle'
import { IAppState } from '../App/CombineReducers';
import { connect } from 'react-redux';

interface StateProps {
  state: IAppState
}
class App extends Component<StateProps> {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <MainStyleSheet.MainStyle>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
          {this.props.state.header.modalCriarConta &&
            <MainStyleSheet.BackgroundModal>
              <CriarContaModal />    
            </MainStyleSheet.BackgroundModal>
          }
        </MainStyleSheet.MainStyle>
        <Footer />
      </div>
    )
  };
}
const mapStateToProps = (states: IAppState): StateProps => {
  return {
    state: states 
  }
}

export default connect<StateProps, any, any, IAppState>(mapStateToProps)(App)
