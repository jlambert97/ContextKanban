import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 50px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #55d49f;
    border-bottom-style: solid;
    border-bottom-color: rgba(0,0,0, 0.2);

    label {
        font-size: 20px
    }
`

export const Label = styled.label`
    margin-left: 10px;
`