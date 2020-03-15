import React from 'react'
import { connect } from 'react-redux'

import { agify, iceAndFire } from './api'

import Header from './components/Header'
import CharactersList from './components/CharactersList'
import { AppContainer } from './AppStyle'

import { updateAges, updateCharactersList } from './components/CharactersList/redux/actions'

const mapStateToProps = ({ characters: { ages, charactersList } }) => ({
  ages,
  charactersList
})

const mapDispatchToProps = {
  updateAges,
  updateCharactersList
}

class App extends React.Component {
  async fetchCharacters() {
    const charsData = await iceAndFire.fetchCharacters()
    this.props.updateCharactersList(charsData)
  }

  async fetchAges(names) {
    const agesData = await agify.fetchAges({ names })
    this.props.updateAges(agesData)
  }

  componentDidMount() {
    this.fetchCharacters()
  }

  componentDidUpdate(prevProps) {
    const chars = this.props.charactersList

    if (prevProps.charactersList.length !== chars.length && chars.length) {
      this.fetchAges(chars.map(char => char.name.split(' ')[0]))
    }
  }

  render() {
    return (
      <AppContainer className='container mt-5'>
        <Header />

        <CharactersList />
      </AppContainer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
