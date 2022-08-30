import React from 'react'
import { HeaderApp } from './components/HeaderApp'
import './App.css'
import pic1 from './pic1.png'
import GetSession from './components/GetSession'

export default function App() {
  return (
    <div className="App">
      <HeaderApp name="props" />

      <main>
        <img src={pic1} className="App-pic" alt="pic1" />
        <GetSession name="props" />
        <section className="sessions">
          <div className="session">
            <div className="decoration"></div>
            <h1>Відгуки</h1>
            <div className="decoration"></div>
            <div></div>
          </div>
        </section>
      </main>
    </div>
  )
}
