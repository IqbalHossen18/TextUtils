import './App.css';
import React, {useState} from 'react';
import Alert from './components/Alert';
import Textarea from './components/Textarea';
function App() {
    
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
                  {/* <Nevbar title="TextUtils"/> */}
                  <Alert alert={alert}/>
                  <Textarea title = "TextUtils" showAlert={showAlert}/>
    </>
  );
}

export default App;
