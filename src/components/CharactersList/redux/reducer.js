import * as constants from './constants'

const initialState = {
  ages: [],
  charactersList: [],
}

export default (state = initialState, { type, newAges, newCharacters, newCharactersList }) => {
  switch (type) {
    case constants.ADD_CHARACTERS:
      return {
        ...state,
        charactersList: [
          ...state.charactersList,
          ...newCharacters
        ]
      }
    case constants.UPDATE_AGES:
      return {
        ...state,
        ages: newAges
      }
    case constants.UPDATE_CHARACTERS_LIST:
      return {
        ...state,
        charactersList: newCharactersList
      }
    default:
      return state
  }
}
