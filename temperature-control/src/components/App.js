import Button from './Button/Button';
import { useState } from 'react';

function App() {

  const [temperature, setTemp] = useState(20)
  const [temperatureColor, setTempColor] = useState('cold')

  const increaseTemp = () => {
    const newTemp = temperature + 1

    if (newTemp >= 20) {
      setTempColor("hot")
    }

    setTemp(newTemp)
  }

  const decreaseTemp = () => {
    const newTemp = temperature - 1

    if (newTemp < 20) {
      setTempColor("cold")
    }

    setTemp(newTemp)
  }

  return (
    <div className="app-container">
      <div className='temperature-display-contaioner'>
        <div className={`temperature-display ${temperatureColor}`}>{temperature}</div>
      </div>
      <div className='button-container'>
        <Button control='+' onClick={increaseTemp}/>
        <Button control='-' onClick={decreaseTemp}/>
      </div>
    </div>
  );
}

export default App;
