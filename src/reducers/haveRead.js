import { ADD_TOHAVEREAD } from '../actions'

export const haveReadList = (state = [], action) => {
  switch(action.type) {
    case ADD_TOHAVEREAD:
      return [...state, action.haveReadBook]
    default:
      return state
  }
}
