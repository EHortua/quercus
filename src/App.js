import './App.css';
import { useContext, useState } from "react";
import { AuthRouter } from "./routers/AuthRouter";
import { UnauthRouter } from "./routers/UnauthRouter";
import AuthContext from "./context/AuthContext";



function App() {

  const {auth} = useContext(AuthContext);

  return (
    <div className="App">
      <header className="App-header">
        {auth? <AuthRouter/> : <UnauthRouter/>}
      </header>
    </div>
  );
}

export default App;
