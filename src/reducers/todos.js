import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    TOGGLE_ALL_TODOS,
    CLEAR_SELECTED_TODOS
} from '../actions/index'

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            )

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)

        case CLEAR_SELECTED_TODOS:
            return state.filter(todo => !todo.completed)

        case TOGGLE_ALL_TODOS:
            const isAllToggle = state.every(todo => todo.completed);
            return state.map(todo => { return { ...todo, completed: !isAllToggle}})

        default:
            return state
    }
}

export default todos