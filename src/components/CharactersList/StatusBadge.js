import React from 'react'

const StatusBadge = ({ isDead }) => (
  <span className={`badge badge-pill badge-${ isDead ? 'danger' : 'success' }`}>
    { isDead ? 'Dead ' : 'Alive ' }
    { isDead ? <i className='far fa-sad-tear' /> : <i className='far fa-smile-beam' /> }
  </span>
)

export default StatusBadge
