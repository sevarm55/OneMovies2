import { getVideoUrl } from '../../../api/URL'
import sendRequest from '../../../api/sendRequest'
const { getRequest } = sendRequest()

export const fetchVideo = async (id) => {
    const VIDEOS_URL = getVideoUrl(id)
    const result = await getRequest(VIDEOS_URL)
    return result
}
