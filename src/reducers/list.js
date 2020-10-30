import { GET_LISTNAME } from '../actions/index.js'

export const listName = (state = 'Hardcover Fiction', action) => {
  switch(action.type) {
    case GET_LISTNAME:
    return action.listName
    default:
      return state
    }
}
