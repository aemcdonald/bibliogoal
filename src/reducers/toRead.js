import { ADD_TOREAD } from '../actions'
import { UPDATE_TOREAD } from '../actions'

export const toReadList = (state = [], action) => {
  switch(action.type) {
    case ADD_TOREAD:
      console.log("TO READ!");
      return [...state, action.toReadBook]
      break;
    case UPDATE_TOREAD:
      console.log("switch fired");
      return [...state, action.updatedList]
    default:
      return state
  }

  // switch(action.type) {
  //   case ADD_TOREAD: {
  //     console.log("TO READ!");
  //     return [...state, action.toReadBook]
  //     break;
  //   }
  //
  //   case UPDATE_TOREAD: {
  //     console.log("switch fired");
  //     return [...state, action.updatedList]
  //   }
  //   default:
  //     return state
  // }

  // switch(action.type) {
  //   case UPDATE_TOREAD:
  //     return [action.updatedList]
  //   default:
  //     return state
  // }
}
