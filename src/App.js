import './App.css';
import Rotas from './Routes/AppRoutes';
import Bubble from './Components/Bubble';
import Selection from './Components/Selection';
import Insertion from './Components/Insertion';

function App() {
  return (
    <div className="App">
      <Rotas />

      <Bubble />
      <Selection />
      <Insertion /> 
    </div>
  );
}

export default App;
