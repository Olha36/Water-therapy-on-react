import ListItem from '../ListItem'
// import { HeaderApp } from './index';
import logo from './logo.svg'

export const header = [
  'Головна',
  'Сеанси',
  'Відгуки',
  'Контакти',
  'Новини',
  'Про мене',
  'Блог',
]

export const blueButton = <p>Записаться на сеанс</p>

export function HeaderApp(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ListItem header={header} />
      <div className="button">{blueButton}</div>
    </header>
  )
}
