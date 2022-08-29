/* eslint-disable react/prop-types */
import React from 'react'
import logo from './logo.svg'
import './App.css'

const blueButton = <p>Записаться на сеанс</p>

// function getInfo(info) {
//   return (
//     info.main +
//     info.sessions +
//     info.feedback +
//     info.contacts +
//     info.news +
//     info.about +
//     info.blog
//   )
// }

// const info = {
//   main: 'Головна',
//   sessions: 'Сеанси',
//   feedback: 'Відгуки',
//   contacts: 'Контакти',
//   news: 'Новини',
//   about: 'Про мене',
//   blog: 'Блог',
// }

// const element = (
//   <ul>
//     <li>{getInfo(info)}</li>
//   </ul>
// )

const headers = [
  'Головна',
  'Сеанси',
  'Відгуки',
  'Контакти',
  'Новини',
  'Про мене',
  'Блог',
]

function ListItem(props) {
  const { header } = props
  const listItems = header.map((head) => <li key={head.toString()}>{head}</li>)
  return <ul>{listItems}</ul>
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListItem header={headers} />
        <div className="button">{blueButton}</div>
      </header>
    </div>
  )
}
