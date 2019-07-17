import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TodosInput from './components/TodosInput';
import Todo from './components/Todo';
import TodosFooter from './components/TodosFooter';

const styles = () => ({
  title: {
    fontSize: '100px',
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)'
  },
  container: {
    background: '#fff',
    margin: '40px 20%',
    position: 'relative',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  }
});

export const ThemeContext = React.createContext('light');


class App extends Component {
  render() {
    const { 
      classes, ...container } = this.props;

    return (
      <div>
        <div className={classes.title}>TO DO</div>

        <section className={classes.container}>
          <TodosInput
            onKeyPress={container.onKeyPress}
            quantity={container.quantity}
            active={container.everyCompletedTodo}
            onToggleAllTodos={container.onToggleAllTodos}
          />

          <div className={classes.wrapper}>
            {container.todos.map(todo => 
              <Todo
                onToggle={container.onToggleTodo} 
                key={todo.id}
                todo={todo} 
                deleteTodoById={container.deleteTodo}
              />
            )}
          </div>

          {(container.quantity > 0) &&
            <TodosFooter
              visibilityFilter={container.active}
              someCompletedTodo={container.someCompletedTodo}
              changeFilterState={container.onChangeFilter}
              deleteCompletedTodos={container.onClearSelectedTodos}
              activeQuantity={container.activeQuantity}
            />}
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(App);