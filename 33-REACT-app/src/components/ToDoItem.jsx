import { Flex, Button } from "antd"
import { useEffect } from "react";

export default function ToDoItem(props) {
    const item = props.item

    useEffect(() => {
        console.log('done changed');
        return () => {
            console.log('unmount', item.text);
        }
    }, [props.item.isDone])

    return (
        <li>
            <div className={`todo-item ${item.isDone ? 'item-done' : ''}`}>
                <Flex justify='space-between'>
                    <p>{item.text}</p>
                    <div className="actions">
                        {!item.isDone ? <Button color='primary' onClick={() => props.onAction(item.id, 'setDone')} variant="solid">Done</Button> : null}
                        <Button color='blue' onClick={() => props.onAction(item.id, 'copy')} variant="solid">Copy</Button>
                        <Button color='danger' onClick={() => props.onAction(item.id, 'delete')} variant="solid">Delete</Button>
                    </div>
                </Flex>
            </div>
        </li>
    )
}

