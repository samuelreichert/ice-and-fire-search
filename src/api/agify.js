import axios from 'axios'

const BASE_URL = 'https://api.agify.io'

export const fetchAges = async ({ names }) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: { name: names }
    })

    return data
  } catch (error) {
    console.error('Error trying to get ages from agify API', error)
    return []
  }
}
