import { useState } from 'react'
import './App.css'
import InputSection from './InputSection';
import OutputSection from './OutputSection';

const initialState  = {
  name: "",
  email: "",
  phone: "",
  imgUrl: "",
  education: [],
  experience: []
};

function App() {
  const [inputState,setInputState] = useState(initialState);

  return (
    <div className="app-container">
      <InputSection cvState={inputState} cvSetter={setInputState}/>
      <OutputSection cvState={inputState}/>
    </div>
  )
}

export default App
