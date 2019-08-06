import React, { useReducer } from 'react'
import Context from './Context'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Components/Header'
import Reducer, { initialState } from './Reducer'
import GlobalStyle from './style'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
const App = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const store = { state, dispatch }

    return (
        <Router>
            <Context.Provider value={store}>
                <DndProvider backend={HTML5Backend}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </DndProvider>
            </Context.Provider>
            <GlobalStyle />
        </Router>

    )
}

export default App
