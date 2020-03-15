import * as constants from './constants'

export const changeValue = ({ input, value }) => ({
  type: constants.CHANGE_INPUT_VALUE,
  input,
  value
})
