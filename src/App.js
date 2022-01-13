import './App.css';
import './styles.css';
import Popup from './components/Popup/Popup';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { ImageList, ImageListItem} from '@mui/material';
import Box from '@mui/material/Box';
import { createApi } from 'unsplash-js';
import ItemData from './components/Images/ItemData';


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
        <Navbar />
      </div>
      <header className="App-header">
      <Box sx={{ width: '40%', height: '50%', overflowY: 'hidden' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {ItemData.map((item) => (
              <ImageListItem key={item.img}>
                <img 
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"  
                  />
              </ImageListItem>
            ))}
          </ImageList>
          </Box>
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
