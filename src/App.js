import { useState } from 'react';

// Import assets and stylesheet
import logo from './logo.png';
import './App.css';

// Import components for app
import { Card } from './Components';

// Import workers from workers.json
let workersData = require('./api/workers.json');

function App() {
  const [workers, setWorkers] = useState(workersData);
  const [currentWorker, setCurrentWorker] = useState({});

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
          {workers.stunt_doubles.map((worker) => {
            return (
              <Card 
                key={worker.id}
                name={worker.name} 
                photo={worker.photo}
              />
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
