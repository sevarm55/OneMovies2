import { fetchSeries } from "./seriesDataApi"

export const actionFetchSeries = () => {
  return async (dispatch) => {
    const result = await fetchSeries()
    dispatch({ type: 'fetchSeries', payload: result.results })
  }
}