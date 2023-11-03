import { useState } from 'react'
import './App.css'
import InputSection from './InputSection';
import OutputSection from './OutputSection';


function App() {
  const [inputState,setInputState] = useState({});

  let currString = "";

  for (let key of Object.keys(inputState)) {
    currString += inputState[key];
    currString += " ";
  }

  function setUserData (key) {
    return (
      (value) => {
        const newState = {...inputState};
        newState[key] = value;
        setInputState(newState);
      }
    );
  }

  return (
    <div className="app-container">
      <InputSection dataSetter={setUserData}/>
      <OutputSection value={currString}/>
    </div>
  )
}

export default App
