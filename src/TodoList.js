import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function TodoList(props) {
    const todos = props.todos.map((todo, index) => (
        <>
            <ListItem>
                <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
        </>
    ));
    return (
        <Paper>
            <List>
                {todos}
            </List>
        </Paper>
    )
}
export default TodoList;