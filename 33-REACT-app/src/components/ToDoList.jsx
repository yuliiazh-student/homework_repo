import { Card } from "antd"
import ToDoItem from "./ToDoItem"

export default function ToDoList(props) {
    return (
        <Card>
            <h2>TODOs list</h2>
            <ul className='todo-list'>
                {props.list.map((item) => (
                    <ToDoItem
                        item={item}
                        onAction={(id, action) => props.onAction(id, action)}
                    />
                ))}
            </ul>
        </Card>
    )
}


