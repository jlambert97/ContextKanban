import React, { useContext, useState } from 'react'
import Context from '../../Aṕp/Context'

const Home = () => {
    const { state, dispatch } = useContext(Context)
    const [ value, setValue ] = useState(0)

    return (
        <>
            <h4>Teste count</h4>
            <div>
                Valor do contador: {state.count}
            </div>
            <div>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>Incrementar</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrementar</button>
            </div>
            <div>
                Colocar valor manualmente: 
                <input onChange={e => setValue(parseInt(e.target.value))}></input>
                <button onClick={() => dispatch({type:'SET_VALUE', payload: value})}>Alterar</button>
            </div>
        </>
    )
}

export default Home
