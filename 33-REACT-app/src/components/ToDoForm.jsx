import { Button, Card, Col, Input, Row } from 'antd'
import { useState } from 'react';

export default function ToDoForm(props) {
    console.log(props);

    const [value, setValue] = useState('')

    const clickHandler = () => {
        if (value !== '') {
            const isAdded = props.onAdd(value);

            if (isAdded) {
                setValue('');
            } else {
                alert('This task already exists');
            }
        } else {
            alert('Enter to do text');
        }
    };

    return (
        <Card style={{ marginBottom: '20px' }}>
            <Row>
                <Col span={20}>
                    <Input value={value} onChange={(e) => setValue(e.target.value)} />
                </Col>
                <Col span={4}>
                    <Button color='cyan' variant="solid" onClick={clickHandler}>Add</Button>
                </Col>
            </Row>
        </Card>
    )
}