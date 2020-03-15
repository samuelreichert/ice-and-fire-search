import axios from 'axios'
const BASE_URL = 'https://anapioficeandfire.com/api/characters'

export const fetchCharacters = async ({ page = 1, searchParams } = {}) => {
  try {
    const params = {
      page,
      ...searchParams
    }

    const { data } = await axios.get(BASE_URL, {
      params
    })

    return data
  } catch (error) {
    console.error('Error trying to get characters from ice and fire API', error)
  }
}
