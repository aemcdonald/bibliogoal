import { GET_BOOKLIST } from '../actions'

export const books = (state = [], action) => {
  switch(action.type) {
    case GET_BOOKLIST:
    return [...state, action.allBooks]
    default:
      return state
    }
}
