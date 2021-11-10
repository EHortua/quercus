import logo from './logo.svg';
import Header from './components/header';
import Productslist from './components/Productslist';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Productslist/>
    </div>
  );
}

export default App;
