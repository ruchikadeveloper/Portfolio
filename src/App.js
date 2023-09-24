import React from "react";


import {BrowserRouter as Router} from 'react-router-dom'; 



import "./App.css";
import "@fontsource/poppins";
import route from "./routes/index";
import Drawer from "./Components/Containers/Drawer/Drawer";
function App() {
  return (
    <div className="App">
      <Drawer />
      {route}
    </div>
  );
}

export default App;
