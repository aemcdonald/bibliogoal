import { ADD_TOREAD } from '../actions';
import { UPDATE_TOREAD } from '../actions';

export const toReadList = (state = [], action) => {
  switch(action.type) {
    case ADD_TOREAD:
      return [...state, action.toReadBook]
    case UPDATE_TOREAD:
      return [...state, action.updatedList]
    default:
      return state
  }
}
