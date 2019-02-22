import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {ALL, ACTIVE, COMPLETED} from './constants';
import TodosInput from './components/TodosInput';
import Todo from './components/Todo';
import TodosFooter from './components/TodosFooter';
import _ from 'lodash';

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

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      selectedFilter: ALL
    }
  }

  render() {
    const { classes } = this.props;
    const { todos, selectedFilter } = this.state;
    const filteredTodos = this.onFilterTodos(selectedFilter);

    return (
      <div>
        <div className={classes.title}>Todos</div>

        <section className={classes.container}>
          <TodosInput
            addTodo={this.addTodo}
            todos={todos}
            onToggleAllTodos={this.onToggleAllTodos}
          />

          <div className={classes.wrapper}>
            {filteredTodos.map(todo => 
            <Todo
              onToggle={this.onToggle} 
              key={todo.id}
              todo={todo} 
              deleteTodoById={this.deleteTodoById}
            />)}
          </div>

          {todos.length > 0 ?
            <TodosFooter
              filter={selectedFilter}
              changeFilterState={this.changeFilterState}
              deleteCompletedTodos={this.deleteCompletedTodos}
              todos={todos}
            /> : null}
        </section>
      </div>
    );
  }

  onFilterTodos = (selectedFilter) => {
    const {todos} = this.state;

    switch (selectedFilter) {
      case ALL: 
        return todos;
      case ACTIVE: 
        return todos.filter(todo => !todo.completed);
      case COMPLETED: 
        return todos.filter(todo => todo.completed);
      default:
       return todos;
    }
  }

  changeFilterState = value => {
    this.setState({
      selectedFilter: value
    })
  }

  addTodo = e => {
    let { value } = e.target;

    if (e.key === 'Enter' && value) {
      let todo = this.createTodo(value);
      e.target.value = '';

      this.setState(({ todos }) => ({
        todos: [...todos, todo]
      }))
    }
  }
  
  createTodo = value => {
    return {
      id: _.uniqueId(),
      label: value,
      completed: false
    };
  }

  onToggle = id => {
    const { todos } = this.state;

    const updateTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    this.setState({ todos: updateTodos });
  }

  onToggleAllTodos = () => {
    const { todos } = this.state;

    const isCompletedAllTodos = todos.every(todo => todo.completed);

    this.setState(({todos}) => ({ 
      todos: todos.map(todo => { return { ...todo, completed: !isCompletedAllTodos}})
    }));
  }

  deleteTodoById = id => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  deleteCompletedTodos = () => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => !todo.completed)
    })
  }
}

export default withStyles(styles)(App);