const sendRequest = () => {
  const getRequest = async (url) => {
    const result = await fetch(url)
    const jsonRes = await result.json()
    return jsonRes
  }
  const postRequest = async (url, data) => {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const jsonRes = await result.json()
    return jsonRes
  }

  return { getRequest, postRequest }
}

export default sendRequest
