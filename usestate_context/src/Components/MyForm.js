import React, {useState, useContext} from 'react';
import { theContext } from '../Context/theContext';


function MyForm() {
  const [localValue, setLocalValue] = useState('');
  const [localLastName, setLocalLastName] = useState('');
  const {name, setName, lastName, setLastName} = useContext(theContext);

  const handleSubmit=()=>{
    setName(localValue);    
    setLastName(localLastName);  
  }

  return (    
    <div className="form">
      <p>Local value 01: {localValue}</p>
      <p>Context value 01: {name}</p><hr/>
      <p>Local value 02: {localLastName}</p>
      <p>Context value 02: {lastName}</p><br/>
      <label for="fname">Local value 01: </label>
      <input type="text" value={localValue} onChange={(e)=>{setLocalValue(e.target.value)}} name="fname"/><br/>
      <label for="lname">Local value 02: </label>
      <input type="text" value={localLastName} onChange={(e)=>{setLocalLastName(e.target.value)}} name="lname"/><br/>
      {/* <button onClick={()=>setName(localValue) }>Submit</button> */}
      <button onClick={handleSubmit }>Submit</button>   
    </div>
  );
}

export default MyForm;
