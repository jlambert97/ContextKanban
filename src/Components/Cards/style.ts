import styled, { css } from 'styled-components'

interface IProps {
    isDragging: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5px 3px 2.5px 3px;
    border-radius: 5px;
    background-color: #dcfaea;
    flex-grow: 0;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    cursor: grab;
    
    header {
        border-bottom: 1px solid rgba(230, 230, 230, 0.5);
    }

    h3 {
        margin: 3px 0 3px 3px;
    }

    ${(p: IProps) => p.isDragging && css`
        border: 2px dashed rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        color: transparent;
        cursor: grabbing;
    `}
`

export const Content = styled.div`
    padding-top: 5px;

    label {
        width: 100%;
        margin: 0 0 5px 5px;
        flex: 1 1 2;
    }
`