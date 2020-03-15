import * as constants from './constants'

export const addCharacters = (newCharacters) => ({
  type: constants.ADD_CHARACTERS,
  newCharacters
})

export const updateAges = (newAges) => ({
  type: constants.UPDATE_AGES,
  newAges
})

export const updateCharactersList = (newCharactersList) => ({
  type: constants.UPDATE_CHARACTERS_LIST,
  newCharactersList
})
