import thanks from './thanks.png'

export default function GetPrice(price) {
  return (
    <section className="sessions">
      <div className="session">
        <div className="decoration"></div>
        <h1>Вартість сеансів</h1>
        <div className="decoration"></div>
      </div>
      <div className="prices">
        <div className="price">
          <p>RitmStyle із зануренням</p>
          <p>500грн.</p>
          <p>Абонемент на RitmStyle</p>
          <p>700грн.</p>
          <p>RitmStyle для пар</p>
          <p>1200грн.</p>
          <p>RitmStyle для вагітних</p>
          <p>600грн.</p>
          <p>RitmStyle + фотосесія</p>
          <p>1400грн.</p>
        </div>

        <div className="thanks">
          <img src={thanks} alt="thanks" />
          <p>Подарунковий сертифікат </p>
        </div>
      </div>
    </section>
  )
}
