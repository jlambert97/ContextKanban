import React from 'react'
import Card from '../Cards'
import { Container } from './style'

const Coluna = (props: any) => {
    return (
        <Container>
            <header>
                <h1>{props.data.title}</h1>
            </header>

            <ul>
                { props.data.cards.map((card: { id: any; }, index: any) => <Card key={card.id} index={index} data={card} />) }
            </ul>
        </Container>
    )
}

export default Coluna