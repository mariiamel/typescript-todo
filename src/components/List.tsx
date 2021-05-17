import  { ToDo } from '../App'
import ListItem from './ListItem'

interface ListProps {
    toDos: ToDo[]
}

export default function List(props: ListProps) {

    let listItems = props.toDos.map((toDo, i) => {
        return <ListItem toDo={toDo} />
    })

    return(
        <div className='list'>
            <div className='list__header'></div>
            <div className='list__body'>
                { listItems }
            </div>
        </div>
    )
}