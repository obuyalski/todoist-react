import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants';

const filtersArray = [
    { label: 'All', value: SHOW_ALL },
    { label: 'Active', value: SHOW_ACTIVE },
    { label: 'Completed', value: SHOW_COMPLETED }]

const styles = () => ({
    wrapper: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 15px',
        borderTop: '1px solid #e6e6e6'
    },
    button: {
        margin: '0 8px'
    },
    hidden: {
        visibility: 'hidden'
    },
    activeFilter: {
        border: '1px solid rgba(175, 47, 47, 0.2)'
    }
});

class TodosFooter extends Component {
    render() {
        const { classes, deleteCompletedTodos, activeQuantity, changeFilterState, someCompletedTodo } = this.props;
        const isCompleted = someCompletedTodo ? null : classes.hidden ;

        const filtersButton = filtersArray.map((filter, index) =>
            <Button
                key={`key-${index}`}
                onClick={() => changeFilterState(filter.value)}
                className={`${classes.button} ${this.displayBorderButton(filter.value)}`}
            >
                {filter.label}
            </Button>)

        return (
            <div className={classes.wrapper}>
                <div>{activeQuantity} items left</div>
                <div>{filtersButton}</div>

                <Button 
                    onClick={deleteCompletedTodos} 
                    className={isCompleted}>Clear completed</Button>
            </div>
        );
    }

    displayBorderButton = value => {
        const { classes, visibilityFilter } = this.props;

        return visibilityFilter === value ? classes.activeFilter : null;
    }
}

export default withStyles(styles)(TodosFooter);