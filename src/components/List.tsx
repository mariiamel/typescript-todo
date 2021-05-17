import { FC, ReactElement } from 'react'
import  { ToDo } from '../App'
import ListItem from './ListItem'

interface ListProps {
    toDos: ToDo[],
    toggleModal: () => void,
    updateToDos: (i:number) => void
}

const List:FC<ListProps> = function(props:ListProps) {
    let items = props.toDos.map((toDo:ToDo, i:number) => {
        return <ListItem
            index={i}
            key={i}
            toDo={toDo}
            updateToDos={props.updateToDos}
        />
    })

    return(
        <div className="list">
        <div className="list__header">
            <p className="heading heading--two">ToDo List</p>
            <p className="heading heading--two list__header__add" onClick={props.toggleModal}>Add new tasks</p>
        </div>
        <div className="list__body">
            {items}
        </div>
        </div>
    )
}

export default List