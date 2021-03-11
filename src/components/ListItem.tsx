import { ToDo } from '../App';
import moment from 'moment';

interface ListItemProps {
  toDo: ToDo,
  index: number,
  updateToDos: (index:number) => void
}

export default function ListItem(props:ListItemProps) {
  let currentDate = new Date().toString()
  let displayDate = moment(props.toDo.dueDate).format('YY-MM-DD')

  return (
    <span className="list__item">
      <input 
        className="heading heading--one" 
        type="checkbox" 
        defaultChecked={props.toDo.complete} 
        onClick={() => props.updateToDos(props.index)}
      />
      <p className="content content--one list__text">{displayDate}</p>
      <p className="content content--one list__text">{props.toDo.name}</p>
    </span>
  )
}