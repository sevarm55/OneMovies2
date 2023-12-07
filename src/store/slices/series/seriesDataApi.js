import { getSeriesUrl } from '../../../api/URL'
import sendRequest from '../../../api/sendRequest'
const { getRequest } = sendRequest()

export const fetchSeries = async (id) => {
    const SERIES_URL = getSeriesUrl(id)
    const result = await getRequest(SERIES_URL)
    return result
}
