import './App.css';
import Rotas from './Routes/AppRoutes';
import Bubble from './Components/Bubble';
import Selection from './Components/Selection';

function App() {
  return (
    <div className="App">
      <Rotas />

      <Bubble />
      <Selection />
    </div>
  );
}

export default App;
