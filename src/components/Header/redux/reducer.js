import * as constants from './constants'

const initialState = {
  culture: '',
  gender: '',
  isAlive: false,
  isDead: false,
  name: '',
}

export default (state = initialState, { type, input, value }) => {
  switch (type) {
    case constants.CHANGE_INPUT_VALUE:
      return {
        ...state,
        [input]: value
      }
    default:
      return state
  }
}
