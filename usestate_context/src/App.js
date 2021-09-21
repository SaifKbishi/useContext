import React, {useState} from 'react';
import MyForm from './Components/MyForm'
import { theContext } from './Context/theContext';
import ComponentB from './Components/ComponentB'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const {Provider} = theContext;
  
  return (    
    <div className="App">
      <Provider value={{name, setName, lastName, setLastName}}>
        <MyForm />
        <ComponentB/>
      </Provider>
    </div>
  );
}

export default App;
