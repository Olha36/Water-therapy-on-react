import React from 'react'
import PropTypes from 'prop-types'

export default function ListItem({ header = [] }) {
  const listItems = header.map((head, key) => <a key={key}>{head}</a>)
  return <div>{listItems}</div>
}

ListItem.propTypes = {
  header: PropTypes.array,
}
