import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons/Button';
import './styles.css';
import Popup from './components/Popup/Popup';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimePopup] = useState(false);

  //  useEffect(() => {
  //   setTimeout(() => {
  //     setTimePopup(true);
  //   }, 3000);
  // }, []) 

  return (
    <div className="App">
      <div className="App-navbar">
        <Navbar style={{ backgroundColor: 'red'}} />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setButtonPopup(true)}>Click me !</button>
        <Button onClick={() => setButtonPopup(true)} variant="danger" size={"sm"}>Eloooo</Button>
        <Button onClick={() => setButtonPopup(true)} variant="default" size={"sm"}>Eloooo</Button>
      </header>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3> Woah Popup !</h3>
        <p> WOAAAAAAA </p>
      </Popup>

      <Popup trigger={timedPopup} setTrigger={setTimePopup}>
        <h3> THIS IS AN AUTO TIMED Woah Popup !</h3>
        <p> WOAAAAAAA triggered by timer ! </p>
      </Popup>
    </div>
  );
}

export default App;
