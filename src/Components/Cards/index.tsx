import React from 'react'

export interface ICard {
    titulo: string
    conteudo: string
}

const Card = () => {
    return (
        <div>
            <h4>Titulo do Card</h4>
            <div>
                Conteudo do card
            </div>
        </div>
    )
}

export default Card