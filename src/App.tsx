import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import { getImages } from './utils/functions';

function App() {
  const [pins, setNewPins] = useState<string[]>([]);

  const onSearchSubmit = (text: string) => {
    getImages(text).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        // plus the previos pins
        ...pins,
      ];

      newPins.sort((a, b) => 0.5 - Math.random());
      setNewPins(newPins);
    });
  };

  const getInitialPins = () => {
    // wait for all of the pins and show them at once
    let promises: any[] = [];
    let initalPinsData: any[] = [];

    let pins = ['cat', 'Berlin', 'coding', 'nature', 'ocean'];
    pins.forEach((pinRequest) => {
      promises.push(
        getImages(pinRequest).then((res) => {
          let results = res.data.results;
          // concatenates initial data which was empty with new results
          initalPinsData = initalPinsData.concat(results);
          initalPinsData.sort((a, b) => 0.5 - Math.random());
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(initalPinsData);
    });
  };

  // gets pins on page load
  useEffect(() => {
    getInitialPins();
  }, []);

  return (
    <div className='App'>
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
    </div>
  );
}

export default App;
