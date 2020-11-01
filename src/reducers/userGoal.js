import { CREATE_USERGOAL } from '../actions'

export const setUserGoal = (state = '', action) => {
  switch(action.type) {
    case CREATE_USERGOAL:
      return action.userGoal
    default:
      return state
  }
}
