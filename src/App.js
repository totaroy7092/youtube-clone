
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar.js';
import Recommended from './Recommended';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Apps__page'>
      <Sidebar/>
      <Recommended/>
      </div>
      
    </div>
  );
}

export default App;
