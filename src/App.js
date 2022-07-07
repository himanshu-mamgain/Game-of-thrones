import logo from './logo.svg';
import React, {useEffect, useState} from 'react';

import Card from './components/Card';

import "./App.css";

function App() {

  const [characters, setCharacters] = useState([]);

  const getCharcaters = async () => {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");

    setCharacters(await response.json());
  }

  useEffect(() => {
    getCharcaters();
  }, []);

  return (
    <>
      <div className='header'>
        <img src='https://images5.alphacoders.com/403/thumb-1920-403408.jpg' className='header-img' alt='banner_image' />
        <h2 className='title mt-4'>GAME OF THRONES</h2>
      </div>
      <div className='container-fluid mt-2 card-container'>
        <div className='row text-center'>
        {
          characters.map((curElem) => {
            return (
              <Card 
                data={curElem}
              />
            )
          })
        }
        </div>
      </div>
    </>
  );
}

export default App;
