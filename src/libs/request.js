export const apiFetch = async ({payload, method}) => {
  const URL = 'http://192.168.1.68:3001/students/'
  try {
    const response = await fetch(URL, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    return response.json()
  } catch (err) {
    console.error(err)
  }
}