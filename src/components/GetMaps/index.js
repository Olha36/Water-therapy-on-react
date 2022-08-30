import map1 from './map1.png'
import destination from './destination.svg'
import v from './v.svg'
import pic33 from './pic33.svg'

export default function GetMaps(maps) {
  return (
    <div className="maps">
      <img src={map1} alt="map1" />

      <div className="swimming-pool">
        <div className="background">
          <h3>Басейн WorkClass</h3>
          <div className="work-class">
            <img src={destination} alt="destination" />
            <p>Вітрука 13А</p>
            <img src={v} alt="v" />
            <p>м. Спаська</p>
            <img src={pic33} alt="pic33" />
            <p>Запис за домовленністю</p>
            <div className="regist">
              <p>Записатися на сеанс</p>
            </div>
          </div>
        </div>
        <div className="background2">
          <h3>Бассейн &quot; На Гороховій &quot;</h3>
          <div className="work-class2">
            <img src={destination} alt="destination" />
            <p>3-й проїзд Іванова</p>
            <img src={v} alt="v" />
            <p>м. Крестовський острів</p>
            <img src={pic33} alt="pic33" />
            <p>Запис за домовленністю</p>
            <div className="regist">
              <p>Записатися на сеанс</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
