export const GET_BOOKLIST = 'GET_BOOKLIST'
export const GET_LISTNAME = 'GET_LISTNAME'

export const getNYTList = allBooks => ({
  type: GET_BOOKLIST,
  allBooks
})

export const getListName = listName => ({
  type: GET_LISTNAME,
  listName
})
