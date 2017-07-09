export default store => next => action  => {
  if (action.createId) {
    action.id = Math.random().toString(36).substring(7);
  }
  next(action)
}