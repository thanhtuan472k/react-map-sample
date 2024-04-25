import React, { useState } from 'react';
import './App.css';
import MapComponent from './components/MapComponents';

function App() {
  // Define the initial state for the dropdown value
  const [selectedValue, setSelectedValue] = useState('');

  // Handle the dropdown change event
  const handleDropdownChange = e => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <h1>Demo Map</h1>

      {/*Select route component */}
      <form action='' className='form'>
        <label htmlFor='chooseRoute'>Choose route:</label>
        <select value={selectedValue} onChange={handleDropdownChange}>
          <option value='hoianaToDaNang'>Hoiana - Da Nang</option>
          <option value='tamkyToHoiana'>Tam Ky - Hoiana</option>
          <option value='hoianaToHoian'>Hoiana - HoiAn</option>
        </select>

        <label htmlFor='firstLocation'>
          First location (Realtime location):
        </label>
        <input type='text' />
        <label htmlFor='secondLocation'>Bus stop location:</label>
        <input type='text' />
      </form>
      <MapComponent />
    </>
  );
}

export default App;
