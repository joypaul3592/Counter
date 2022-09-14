import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center bg-gray-400 h-screen">
      <h1 className=' mb-8'>Stop Watch</h1>
      <Home />
    </div>
  );
}

export default App;
