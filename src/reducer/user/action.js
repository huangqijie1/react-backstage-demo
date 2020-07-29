// action
export const save_user = (user) => {
  return { type: 'SAVE_USER', data: user }
}

export const save_token = (token) => {
  return { type: 'SAVE_TOKEN', data: token }
}