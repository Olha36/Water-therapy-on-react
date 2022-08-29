import React from 'react'
import PropTypes from 'prop-types'

export default function ListItem({ header = [] }) {
  const listItems = header.map((head, key) => <li key={key}>{head}</li>)
  return <ul>{listItems}</ul>
}

ListItem.propTypes = {
  header: PropTypes.array,
}
