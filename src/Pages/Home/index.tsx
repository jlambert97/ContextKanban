import React from 'react'
import Coluna from '../../Components/Coluna'
import { Container } from './style'
import { cards } from '../../Aṕp/apifake'

const Home = () => {
    const lists = cards();

    return (
        <Container>
            {lists.map(coluna => <Coluna key={coluna.title} data={coluna}/>)}
        </Container>
    )
}

export default Home
