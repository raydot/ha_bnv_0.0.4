const userState = (state=null, action) => {
  if (action.type == 'LI_USER') {
    state = action.value
  }
  return state
}

export default userState