import React, { useState } from 'react'
import { connect } from 'react-redux'

import StatusBadge from './StatusBadge'
import { addCharacters } from './redux/actions'
import { iceAndFire } from '../../api'
import { formatSeachParams } from '../../helpers'

const mapStateToProps = ({ characters: { ages, charactersList }, header }) => ({
  ages,
  charactersList,
  header
})

const mapDispatchToProps = {
  addCharacters
}


const fetchName = (character) => {
  let names = []

  if (character.name) names.push(character.name)
  if (character.titles[0]) names.push(character.titles[0])
  if (character.aliases[0]) names.push(character.aliases[0])

  return names.join(' | ')
}

const isDead = (string) => {
  return !!string
}

const CharactersList = ({ addCharacters, ages, charactersList, header }) => {
  const [page, setPage] = useState(1)

  const loadMore = async ({ e, page }) => {
    e.preventDefault()
    const newPage = page + 1
    setPage(newPage)

    let searchParams = formatSeachParams(header)

    const data = await iceAndFire.fetchCharacters({ page: newPage, searchParams })
    addCharacters(data)
  }

  if (!charactersList.length) return (
    <div className='d-flex justify-content-center mt-5 mb-5'>
      <i className='fas fa-circle-notch fa-7x fa-spin text-muted'></i>
    </div>
  )

  return (
    <div className='mt-5'>
      <ul className='list-group'>
        {
          charactersList.map((character, i) => (
            <li key={i} className='list-group-item d-flex justify-content-between align-items-center'>
              <div>
                <h4>
                  {fetchName(character)} <i className={`fas fa-${character.gender.toLowerCase()}`} />
                </h4>
                <p className='text-muted'>
                  Played by: {character.playedBy[0] ? character.playedBy[0] : 'Not known'}
                  <br />
                  <em>Culture: {character.culture ? character.culture : 'Not known'}</em>
                  <br />
                  <em>Possible age: {(ages.length && ages[i].age) ? ages[i].age : 'Not known'}</em>
                </p>
              </div>

              <StatusBadge isDead={isDead(character.died)} />
            </li>
          ))
        }
      </ul>

      <button
        className='btn btn-outline-primary btn-block btn-lg mt-4 mb-5'
        onClick={e => loadMore({ e, page })}
        type='button'
      >
        Load more ...
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)
