// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const App = () =>{
  const[name,setName]=useState("");
  const[lasN,seLastName]=useState("");
  const[fullName,setFullName]=useState();
  const[LastName,setLastFullName]=useState();

  const inputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
  }
  const inputLastEvent=(event)=>{
    console.log(event.target.value);
    seLastName(event.target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    setFullName(name);
    setLastFullName(lasN);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Hello {fullName} {LastName}</h1>
        <input type="text" placeholder='Enter FirstName' onChange={inputEvent} value={name}/>
        <br />
        <input type="text" placeholder='Enter LastName' onChange={inputLastEvent} value={lasN}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  ); 
}
export default App;
