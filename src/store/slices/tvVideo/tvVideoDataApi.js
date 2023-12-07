import { getTvVideoUrl } from '../../../api/URL'
import sendRequest from '../../../api/sendRequest'
const { getRequest } = sendRequest()

export const fetchTvVideo = async (id) => {
    const TVVIDEOS_URL = getTvVideoUrl(id)
    const result = await getRequest(TVVIDEOS_URL)
    return result
}
