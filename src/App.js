import React from 'react'
import logo from './logo.svg'
import './App.css'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import pic6 from './pic6.png'
import ListItem from './components/ListItem'

const blueButton = <p>Записаться на сеанс</p>

const header = [
  'Головна',
  'Сеанси',
  'Відгуки',
  'Контакти',
  'Новини',
  'Про мене',
  'Блог',
]

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListItem header={header} />
        <div className="button">{blueButton}</div>
      </header>

      <main>
        <img src={pic1} className="App-pic" alt="pic1" />

        <section className="sessions">
          <div className="session">
            <div className="decoration"></div>
            <h1>Сеанси RitmStyle</h1>
            <div className="decoration"></div>
          </div>
          <div className="pictures">
            <img src={pic2} className="App-pic" alt="pic2" />
            <div className="pics">
              <img src={pic3} alt="pic3" />
              <img src={pic4} alt="pic4" />
              <img src={pic5} alt="pic5" />
              <img src={pic6} alt="pic6" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
