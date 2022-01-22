import './App.css';
import './styles.css';
import Popup from './components/Popup/Popup';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { ImageList, ImageListItem} from '@mui/material';
import Box from '@mui/material/Box';
import { createApi } from 'unsplash-js';
import ListOfImages from './components/ImageList/listOfImages';


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimePopup] = useState(false);
  const [props, setProps] = useState([]);


  //  useEffect(() => {
  //   setTimeout(() => {
  //     setTimePopup(true);
  //   }, 3000);
  // }, []) 

  return (
    <div className="App">
      <div className="App-navbar">
        <Navbar />
      </div>
      <header className="App-header">
      <ListOfImages />
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
