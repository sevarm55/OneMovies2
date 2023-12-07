export const initialTvVideo = []

export const TvVideoReducer = (state = initialTvVideo, action) => {
  switch (action.type) {
    case 'fetchTvVideo':
      return action.payload
    default:
      return state
  }
}

export const selectTvVideo = (state) => state.tvVideo