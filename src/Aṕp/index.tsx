import React, { useReducer } from 'react'
import Context from './Context'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Components/Header'
import Reducer, { initialState } from './Reducer'
import GlobalStyle from './style'

const App = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const store = { state, dispatch }

    return (
        <Router>
            <Context.Provider value={store}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Context.Provider>
            <GlobalStyle />
        </Router>

    )
}

export default App
