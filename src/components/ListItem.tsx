import { ToDo } from '../App'
import moment from 'moment'

interface ListItemProps{
    toDo: ToDo
}

export default function ListItem(props: ListItemProps) {

    let currentDate = new Date().toString()
    let displayDate = moment(currentDate).format('YYYY-MM-DD')

    return (
        <div className='list__item'>
            <p className='content content--one list__text'>{displayDate}</p>
            <p className='content content--one list__text'>{props.toDo.name}</p>
        </div>
    )
}