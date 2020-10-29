export const getBooks = (listName) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=8XyEaxrna31JNzWjF8OLgl3naZbdWN91`)
  .then(response => {
    if(!response.ok) {
      throw Error("failed to retrieve books")
    }
    return response.json()
  })
}
