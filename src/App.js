import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ul>{formatHeader(header)}</ul>
        </div>
        <div className='button'>{blueButton}</div>
      </header>
    </div>
  );
}

function formatHeader(header) {
  return (
  header.main + 
  ' ' + header.session + 
  ' ' + header.feedback + 
  ' ' + header.contacts + 
  ' ' + header.contacts + 
  ' ' + header.about
  )
}

const header = {
  main: 'Главная',
  session: 'Сеансы',
  feedback: 'Отзывы',
  contacts: 'Контакты',
  about: 'Обо мне',
  blog: 'Блог'
}


const blueButton =  <p>Записаться на сеанс</p>

export default App;
