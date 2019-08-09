import React, { useRef, useContext } from 'react'
import { Container, Content } from './style'
import { useDrag, useDrop } from 'react-dnd'
import Context from '../../Aṕp/Context'
export interface ICard {
    titulo: string
    conteudo: string
}

const Card = ({data, index, listIndex}: any) => {
    const { state, dispatch } = useContext(Context)
    const [{isDragging}, dragRef] = useDrag({
        item: {
            type: 'CARD', index, listIndex
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item: any, monitor) {
            console.log(item)
            const draggedListIndex = item.listIndex
            const targetListIndex = listIndex;
            const draggedIndex = item.index;
            const targetIndex = index;

            if(draggedIndex === targetIndex  && draggedListIndex === targetListIndex)
                return

            // tive que tipar como any para remover erros avisando de possivel null
            const targetSize:any = ref.current.getBoundingClientRect()
            const targetCenter:any = (targetSize.bottom - targetSize.top) / 2
            const draggedOffset:any = monitor.getClientOffset();
            const draggedTop:any = draggedOffset.y - targetSize.top

            if(draggedIndex < targetIndex && draggedTop < targetCenter)
                return
            if(draggedIndex > targetIndex && draggedTop > targetCenter)
                return
            
            console.log("xaxa" + draggedListIndex)
            dispatch({type: 'MOVE_CARD', from: draggedIndex, to: targetIndex, fromList: draggedListIndex})

            item.index = targetIndex
        }
    })
    
    // não vou tipar isso, mas concatena as refs para o componente aceitar
    const ref: any = useRef();
    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>
                <header>
                    <h3>{data.title}</h3>
                </header>
                <Content>
                    <label>{data.content}</label>
                </Content>
        </Container>
    )
}

export default Card