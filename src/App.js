import './App.css';
import Rotas from './Routes/AppRoutes';
import Bubble from './Components/Bubble';
import Selection from './Components/Selection';
import Insertion from './Components/Insertion';
import { useState } from 'react';

function App() {
  const [red, setRed] = useState(0);
  const [blue,setBlue] = useState(0);
  const [green, setGreen] = useState(0);


  return (
    <div className="App">
      <Rotas />
      <div className='algoritms'>
        <Bubble />
        <Selection />
        <Insertion />
      </div>
    </div>
  );
}

export default App;
