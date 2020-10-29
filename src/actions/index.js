export const GET_BOOKLIST = 'GET_BOOKLIST'

export const getInitialBooks = allBooks => ({
  type: GET_BOOKLIST,
  allBooks
})
