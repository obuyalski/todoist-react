import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase  from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = () => ({
 input: {
    padding: '16px 16px 16px 0',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.003)',
    width: '100%'
 },
 container: {
     display: 'flex'
 },
 hidden: {
   visibility: 'hidden'
 }
});

class TodosInput extends Component {
  render() {
    const {classes, addTodo, todos, onToggleAllTodos} = this.props;
    const isHidden = todos.length === 0 ? classes.hidden : null;
    const isChecked = todos.every(todo => todo.completed);

    return (
      <div className={classes.container}>
        <Checkbox
            className={isHidden}
            checkedIcon={<ExpandMoreOutlined />}
            checked={isChecked}
            onChange={onToggleAllTodos}
            icon={<ExpandMore />}
        />
        <InputBase 
            placeholder="What needs to be done?"
            onKeyPress={addTodo}
            className={classes.input}
      />
      </div>
    );
  }
}

export default withStyles(styles)(TodosInput);