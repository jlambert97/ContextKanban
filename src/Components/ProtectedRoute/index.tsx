import React, { useContext, Component } from 'react'
import Context from '../../Aṕp/Context'
import { Route, Redirect } from 'react-router-dom'

// const ProtectedRoute = ({component: Component, ...rest}) => {
//     const { state } = useContext(Context)

//     return (
//         <Route 
//             render={props => !state.isAuth ? 
//             <Redirect to="/login" /> : <Component {...props} />}
//         />
//     )
// }

const ProtectedRoute = () => {
    return (
        <div>
            a
        </div>
    )
}
export default ProtectedRoute