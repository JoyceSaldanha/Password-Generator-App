import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase,setUppercase] = useState(false);
  let [lowercase,setLowercase] = useState(false);
  let [numbers,setNumbers] = useState(false);
  let [symbols,setSybmols] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);
  let [fPass,setPass] = useState('')

  let createPassword = () => {
    let charSet='';
    let finalPass='';
    if(uppercase || lowercase || numbers || symbols) {
      if(uppercase) charSet += UC;
      if(lowercase) charSet += LC;
      if(numbers) charSet += NC;
      if(symbols) charSet += SC;
      
      for(let i=0;i<passwordLen;i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setPass(finalPass);
    } else {
      alert("Please select atleast 1 checkbox");
    }
  }

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
  }

  return (
    <>
      <div className="passwordBox">
          <h2>Password Generator</h2>
          <div className='passwordBoxIn'>
            <input type="text" value={fPass} readOnly></input><button onClick={copyPass}>Copy</button>
          </div>

          <div className='passLength'>
            <label>Password Length</label>
            <input type="number" value={passwordLen} onChange={(event) =>setPasswordLen(event.target.value)} max={20} min={10}></input>
          </div>

          <div className='passLength'>
            <label>Include uppercase letters</label>
            <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)}></input>
          </div>

          <div className='passLength'>
            <label>Include lowercase letters</label>
            <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)}></input>
          </div>

          <div className='passLength'>
            <label>Include numbers</label>
            <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)}></input>
          </div>

          <div className='passLength'>
            <label>Include symbol</label>
            <input type="checkbox" checked={symbols} onChange={() => setSybmols(!symbols)}></input>
          </div>

          <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
