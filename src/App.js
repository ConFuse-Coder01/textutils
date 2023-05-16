//import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
   const [mode,setMode]=useState('light')
   const [alert,setAlert]=useState(null)

   const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
   }
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0b0a2b';
      showAlert("Dark mode activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode activated","success");

    }
   }
  return (
    <BrowserRouter>
    
    <div>
    <Navbar title="Navbar" about="about" home="Home" lawda="Lawda" mode={mode} toggleMode={toggleMode}></Navbar>
    </div>
    <Alert alert="textUtil started"></Alert> 
    
    
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About/>}/>
          
          
          <Route path="/"element={<Textform mode={mode}/>}/>
          
          
    </Routes>
    
    </div>
   
   
     
    
    
    </BrowserRouter>
  );
}

export default App;



