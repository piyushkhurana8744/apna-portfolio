import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { Projects } from './project';
import ChakraNavbar from './chakraNavbar';

function App() {
  return (
    <div className="App">
      <ChakraNavbar />
      <Homepage />
      <Projects />
    </div>
  );
}

export default App;
