// Import assets and stylesheet
import logo from './logo.png';
import './App.css';

// Import components for app
import { Deck } from './Components';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-heading'>Stunt Double Finder</h1>
        <h2 className='App-subheading'>
          Created By <a href='https://www.travishenson.com' target='_new'>Travis Henson</a> For
        </h2>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>
        <div className='card-container'>
          <Deck />
        </div>
        <div className='icon-container'>
          <div>Swipe Left for No</div>
          <div>Swipe Right for Yes</div>
        </div>
      </main>
    </div>
  );
}

export default App;
