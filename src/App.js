// App.js file

import './App.css';
import BoxList from './Boxlist';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import React, {useState} from 'react';

function App() {


  const [boxes, setBoxes] = useState([]);

  

  return (
    <div className="App">
     

     <BoxList boxes ={boxes}/>

    </div>
  );
}

export default App;
