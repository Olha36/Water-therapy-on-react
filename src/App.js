import React from 'react'
import { HeaderApp } from './components/HeaderApp'
import './App.css'
import pic1 from './pic1.png'
import GetSession from './components/GetSession'
import GetFeedback from './components/GetFeedback'
import GetAbout from './components/GetAbout'
import GetPrice from './components/GetPrice'
import GetMaps from './components/GetMaps'
import GetFooter from './components/GetFooter'

export default function App() {
  return (
    <div className="App">
      <HeaderApp name="props" />

      <main>
        <img src={pic1} className="App-pic" alt="pic1" />
        <GetSession name="props" />
        <GetFeedback name="feedback" />
        <GetAbout name="about" />
        <GetPrice name="price" />
        <GetMaps name="maps" />
      </main>
      <footer>
        <GetFooter name="footer" />
      </footer>
    </div>
  )
}
