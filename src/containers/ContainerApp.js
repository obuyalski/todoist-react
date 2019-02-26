import { connect } from 'react-redux'
import { 
    setVisibilityFilter,
    addTodo,
    deleteTodoById,
    toggleTodo,
    clearSelectedTodos,
    toggleAllTodos
 } from '../actions/index'
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants';
import App from '../App'

const onFilterTodos = (todos, selectedFilter) => {
    switch (selectedFilter) {
      case SHOW_ALL: 
        return todos;
      case SHOW_ACTIVE: 
        return todos.filter(todo => !todo.completed);
      case SHOW_COMPLETED: 
        return todos.filter(todo => todo.completed);
      default:
       return todos;
    }
}

const mapStateToProps = (state) => {
  return {
    active: state.visibilityFilter,
    todos: onFilterTodos(state.todos, state.visibilityFilter),
    quantity: state.todos.length,
    someCompletedTodo: state.todos.some(todo => todo.completed),
    everyCompletedTodo: state.todos.every(todo => todo.completed),
    activeQuantity: state.todos.filter(todo => !todo.completed).length
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {  
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },

    onKeyPress: ({key, target}) => {
        if(key === 'Enter' && target.value) {
            dispatch(addTodo(target.value));
            target.value = '';
        }
    },

    deleteTodo: (id) => {
        dispatch(deleteTodoById(id))
    },

    onToggleTodo: (id) => {
        dispatch(toggleTodo(id))
    },

    onClearSelectedTodos: () => {
        dispatch(clearSelectedTodos())
    },

    onToggleAllTodos: () => {
        dispatch(toggleAllTodos())
    },

    onChangeFilter: (visibilityFilter) => {
        dispatch(setVisibilityFilter(visibilityFilter))
    }
  }
}

const ContainerApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ContainerApp