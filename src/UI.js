import React from 'react'
import {Input, Button, List, Typography} from 'antd';

const TodoListUI = (props) => {
    return (
        <div className="App">
            <Input value={props.inputValue} style={{width: '300px', margin: '10px'}}
                   onChange={props.change}/>
            <Button type="primary" onClick={props.onMyClick}>Primary</Button>
            <List
                style={{width: '300px', margin: '10px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item   onClick={(index) => {
                        props.handleItemDelete(index)
                    }}>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </div>
    )
} ;
export default TodoListUI
