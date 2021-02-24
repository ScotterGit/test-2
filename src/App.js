import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [txt, setTxt] = useState('');
  
  const [counter, setCounter] = useState(0)

    const clickMe = () => {
    let currentCounterValue = counter;
    let updatedValue = currentCounterValue + 1;
    setCounter(updatedValue);
  };
// ON TEXT CHANGE****************************************
  // const onTextChange = (event) => {
  //   console.log(event.currentTarget.value);
  //   setTxt(event.currentTarget.value.toUpperCase())
  // }

  return (
    <div className="App" style={{border:'50px solid magenta'}}>
{/* ON TEXT CHANGE****************************** */}        
    <div>
      <input type="text" onChange = {(event) => {
            console.log(event.currentTarget.value);
            setTxt(event.currentTarget.value.toUpperCase())
      }}/>
      the value for the text is: {txt}
    </div>
{/* ************************************************* */}
      <div>
        The value for the counter is: {counter}
      </div>
      
      
      <header className="App-header">
        <img src={'https://dog.ceo/img/dog-api-logo.svg'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <button onClick={clickMe}>Click me</button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
