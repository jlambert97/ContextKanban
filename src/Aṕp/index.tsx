import React, { useReducer } from 'react'
import Context from './Context'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Reducer, { initialState } from './Reducer'

const App = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const store = { state, dispatch }

    return (
        <Router>
            <Context.Provider value={store}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Context.Provider>
        </Router>
    )
}

export default App
