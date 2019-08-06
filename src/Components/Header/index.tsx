import React, { useState } from 'react'
import { Container, Label } from './style'
import Axios from 'axios'

const Header = () => {
    const [ val, setVal ] = useState('Sem nada')

    const handleButton = () => {
        Axios.get('http://saleshub.ciashop.com.br/api/v1/healthcheck') 
            .then(res => {
                console.log(res.data)
                setVal(res.data[3].Service)})
    }
    
    return (
        <Container>
            <Label>KanbanContext {val}</Label>
            <button onClick={() => handleButton()}>Xaxa</button>
        </Container>
    )
}

export default Header