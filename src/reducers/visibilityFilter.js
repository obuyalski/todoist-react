import { SET_VISIBILITY_FILTER } from '../actions/index'
import { SHOW_ALL } from '../constants'

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.visibilityFilter
      default:
        return state
    }
  }
  
export default visibilityFilter