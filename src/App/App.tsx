import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideMenu from '../SideMenu/SideMenu'
import * as MainStyleSheet from './AppStyle'

class App extends Component {
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
        </MainStyleSheet.MainStyle>
        <Footer />
      </div>
    )
  };
}

export default App
