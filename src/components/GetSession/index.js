import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import pic6 from './pic6.png'

export default function GetSession(props) {
  return (
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
  )
}
