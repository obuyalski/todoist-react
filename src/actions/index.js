import _ from 'lodash'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS'
export const CLEAR_SELECTED_TODOS = 'CLEAR_SELECTED_TODOS'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: _.uniqueId(),
        text
    }
}

export const setVisibilityFilter = (visibilityFilter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        visibilityFilter
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const toggleAllTodos = () => {
    return {
        type: TOGGLE_ALL_TODOS
    }
}

export const deleteTodoById = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const clearSelectedTodos = () => {
    return {
        type: CLEAR_SELECTED_TODOS
    }
}