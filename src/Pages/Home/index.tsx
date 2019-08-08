import React, { useContext } from 'react'
import Coluna from '../../Components/Coluna'
import { Container } from './style'
import { cards } from '../../Aṕp/apifake'
import Context from '../../Aṕp/Context'

const Home = () => {
    const lists = cards();

    return (
        <Container>
            {lists.map((coluna, index) => <Coluna key={coluna.title} listIndex={index} data={coluna}/>)}
        </Container>
    )
}

export default Home
