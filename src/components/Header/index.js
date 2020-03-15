import React from 'react'
import { connect } from 'react-redux'

import { iceAndFire } from '../../api'
import { updateCharactersList } from '../CharactersList/redux/actions'
import { changeValue } from './redux/actions'
import { formatSeachParams } from '../../helpers'

const mapStateToProps = ({ header: { culture, gender, isAlive, isDead, name } }) => ({
  culture,
  gender,
  isAlive,
  isDead,
  name
})

const mapDispatchToProps = {
  changeValue,
  updateCharactersList
}

const Header = ({ culture, gender, isAlive, isDead, name, changeValue, updateCharactersList }) => {
  const fetchChars = async (e) => {
    e.preventDefault()
    const params = { culture, gender, isAlive, isDead, name }
    const searchParams = formatSeachParams(params)

    const data = await iceAndFire.fetchCharacters({ searchParams })
    updateCharactersList(data)
  }

  return (
    <header>
      <h1 className='display-5 text-center'>Ice and Fire - Characters</h1>
      <hr />

      <form>
        <div className='form-group'>
          <input
            className='form-control'
            onChange={(e) => changeValue({ input: 'name', value: e.target.value })}
            placeholder='search by name...'
            type='text'
            value={name}
          />
        </div>

        <div className='form-group'>
          <input
            className='form-control'
            onChange={(e) => changeValue({ input: 'culture', value: e.target.value })}
            placeholder='search by culture...'
            type='text'
            value={culture}
          />
        </div>

        <div className="form-group">
          <select
            className="custom-select"
            onChange={(e) => changeValue({ input: 'gender', value: e.target.value })}
            value={gender}
          >
            <option value='' disabled>Select gender...</option>
            <option value="female">Female</option>
            <option value='male'>Male</option>
          </select>
        </div>

        <div className='form-group'>
          <div className='custom-control custom-switch'>
            <input
              checked={isAlive}
              className='custom-control-input'
              id='isAlive'
              onChange={(e) => changeValue({ input: 'isAlive', value: e.currentTarget.checked })}
              type='checkbox'
            />
            <label className='custom-control-label' htmlFor='isAlive'>Is alive</label>
          </div>
        </div>

        <div className='form-group'>
          <div className='custom-control custom-switch'>
            <input
              checked={isDead}
              className='custom-control-input'
              id='isDead'
              onChange={(e) => changeValue({ input: 'isDead', value: e.currentTarget.checked })}
              type='checkbox'
            />
            <label className='custom-control-label' htmlFor='isDead'>Is dead</label>
          </div>
        </div>

        <button
          className='btn btn-lg btn-primary btn-block mt-2'
          onClick={fetchChars}
        >
          Search
        </button>
      </form>
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
