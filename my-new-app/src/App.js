
import './App.css';
import Transfers from './components/Transfers';
import FilterButtons from './components/FilterButtons';
import FlightDetails from './components/FlightCard';

function App() {
  return (
    <div className="App">
      <Transfers />
      <FilterButtons />
      <FlightDetails />
    </div>
  );
}

export default App;
