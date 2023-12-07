export const initialVideo = []

export const videoReducer = (state = initialVideo, action) => {
  switch (action.type) {
    case 'fetchVideo':
      return action.payload
    default:
      return state
  }
}

export const selectVideo = (state) => state.video