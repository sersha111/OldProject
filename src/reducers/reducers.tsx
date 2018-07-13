export const addPosts = (state = false, action: any) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return !state
    default:
      return state
  }
}
