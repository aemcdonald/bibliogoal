import { ADD_TOREAD } from '../actions'

export const toReadList = (state = [], action) => {
  switch(action.type) {
    case ADD_TOREAD:
      return [...state, action.toReadBook]
    default:
      return state
  }
}
