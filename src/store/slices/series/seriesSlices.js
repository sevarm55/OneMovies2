export const initialSeries = []

export const seriesReducer = (state = initialSeries, action) => {
  switch (action.type) {
    case 'fetchSeries':
      return action.payload
    default:
      return state
  }
}

export const selectSeries = (state) => state.series