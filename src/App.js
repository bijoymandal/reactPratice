// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const App = () =>{
  // const[name,setName]=useState("");
  // const[lasN,seLastName]=useState("");
  const[fullName,setFullName]=useState({
    fname:"",
    lname:"",
  });
  // const[LastName,setLastFullName]=useState();

  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target.email);

    // const value = event.target.value;
    // const name = event.target.name;
    // const email = event.target.name;
    const {value,name} = event.target;

    setFullName((preValue)=>{
      //console.log(preValue);
      if(name === 'fname')
      {
        return{
          fname:value,
          lname:preValue.lname,
          email:preValue.email,
        };
      }
      else if(name === 'lname')
      {
        return{
          fname:preValue.fname,
          lname:value,
          email:preValue.email,
        };
      }
      else if(name === 'email')
      {
        return{
          fname:preValue.fname,
          lname:preValue.lname,
          email:value,
        };
      }
    })
    // setName(event.target.value);
  }
  // const inputLastEvent=(event)=>{
  //   console.log(event.target.value);
  //   seLastName(event.target.value);
  // }
  const onSubmit=(event)=>{
    event.preventDefault();
    // setFullName(name);
    //setLastFullName(lasN);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Hello {fullName.fname} {fullName.lname} {fullName.email}</h1>
        <input type="text" placeholder='Enter FirstName' name="fname" onChange={inputEvent} />
        <br />
        <input type="text" placeholder='Enter LastName' name="lname" onChange={inputEvent}/>
        <br />
        <input type="email" placeholder='Enter Email' name="email" onChange={inputEvent}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  ); 
}
export default App;
