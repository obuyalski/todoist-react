import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircle from '@material-ui/icons/CheckCircle';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const styles = () => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid #ededed'   
    },
    checkCircle: {
        marginLeft: '0px'
    },
    label: {
        textDecoration: 'line-through'
    }
});

class Todo extends Component {
    render() {
        const { classes, todo, deleteTodoById, onToggle} = this.props;
        const isActive = todo.completed ? classes.label : null;

        return (
            <div className={classes.container}>
                <FormControlLabel
                    className={classes.checkCircle}
                    control={<Checkbox
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                        icon={<RadioButtonUnchecked />}
                        checkedIcon={<CheckCircle />}
                    />}
                    label={todo.text}
                    classes={{label: isActive}}
                />
                <IconButton onClick={() => deleteTodoById(todo.id)}>
                    <Clear />
                </IconButton>
            </div>
        );
    }
}

export default withStyles(styles)(Todo);