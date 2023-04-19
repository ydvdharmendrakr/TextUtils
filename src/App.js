import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
function App() {
const [mode,setMode]=useState('light');
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
}
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='gray';
    showAlert("Dark mode has been enabled","success");
    document.title='TextUtils - Dark Mode'
    // setInterval(() => {
    //   document.title='TextUtils amaging'
    // }, 1500);
    // setInterval(() => {
    //   document.title='Install texutils now'
    // }, 2000);
  }else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils - Light Mode'
  }
}
return (
<>
  {/* <Navbar title "TextUtils" aboutText="About TextUtils"/> */}
  <Navbar title="Textutls" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze blow" mode={mode}/>
  {/* <About aboutText="About Us/> */}
  </div>
  
</>
  );
}

export default App;


