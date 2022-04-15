import Navbar from './components/Navbar/Navbar';
import ListOfImages from './components/ImageList/listOfImages';
import QueryProvider from './components/Navbar/Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artists from './pages/Artists';
import About from './pages/About';


function App() {
  // const [buttonPopup, setButtonPopup] = useState(false);
  // const [timedPopup, setTimePopup] = useState(false);
  // const [props, setProps] = useState([]);




  //  useEffect(() => {
  //   setTimeout(() => {
  //     setTimePopup(true);
  //   }, 3000);
  // }, []) 

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <div className="App"  >
          <QueryProvider>
            <div className="App-navbar">
              <Navbar />
            </div>
            <header className="App-header">
              <ListOfImages />
            </header>
          </QueryProvider>
        </div>
        } />     
        <Route path ="Artists" element={  <Artists />} />
        <Route path ="About" element={  <About />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
