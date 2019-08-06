import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 320px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: #c1f5d9;
    margin-top: 10px;

    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-right-style: solid;
    border-right-color: rgba(0, 0, 0, 0.2);

    header {
        border-bottom: 2xp solid rgba(230, 230, 230, 0.5);
    }

    h1 {
        margin: 3px 0 3px 3px;
    }
`
