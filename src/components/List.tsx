import { ToDo } from '../App';

import ListItem from './ListItem';

interface ListProps {
    toDos: ToDo[]
};

export default function List(props: ListProps) {
    return (
        <div className="list">
            <div className="list__header"></div>
            <div className="list__body">

            </div>
        </div>
    )
};