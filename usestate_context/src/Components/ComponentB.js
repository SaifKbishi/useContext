import React,{useContext} from 'react';
import { theContext } from '../Context/theContext';

const ComponentB = ()=>{
  const {name, setName, lastName, setLastName} = useContext(theContext);

  return (    
    <div className="form">
      <p>Another component using context: </p>
      <p>name: {name}</p>
      <p>last name: {lastName}</p>
    </div>
  );
}

export default ComponentB