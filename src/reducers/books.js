const initState = {
  books: []
}

export const books = (state = initState, action) => {
  switch(action.type) {
    case "GET_BOOKLIST":
    return {
      ...state,
      books: [...state, action.payload]
    }
    default:
      return state
  }
}
