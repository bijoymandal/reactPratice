// import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';
import Card from './Card';
import { Hero } from './component/Hero';

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
  let marks =60;

  /*Props data sending object*/
  const itemObj = {
    name:'Bijoy Mandal',
    age:33,
    city:'Rudranagar'
  }

  /*use ref */
  //let myheadLine= document.getElementById('myheadLine');
  let myheadLine=useRef();
  let firstname,lastname=useRef();
  const change=()=>{
    // myheadLine.current.innerText="Hello";
    // myheadLine.innerText="Hello"; 
    let fName = firstname.value;
    let lName = firstname.value;
    alert(fName+lName);
  }
  //multiple time call data store in useRef hooks
  let APIData = useRef(null);
  const myDiv = useRef(null);
  const fetchData= async()=>{
    const response = await fetch("https://dummyjson.com/products");
    APIData.current=await response.json();

  }
  const ShowData=()=>{
    myDiv.current.innerHTML = JSON.stringify(APIData.current);
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
      <div>
        {(()=>{
          if(marks>=80 && marks <100)
          {
            return <h1>AA</h1>
          }
          else if(marks>=70 && marks<80)
          {
            return <h1>A+</h1>
          }
          else if(marks>=60 && marks<70)
          {
            return <h1>B</h1>
          }
          else if(marks>=50 && marks<60)
          {
            return <h1>B+</h1>
          }
          else if(marks>=40 && marks<50)
          {
            return <h1>C</h1>
          }
          else if(marks>=30 && marks<40)
          {
            return <h1>D</h1>
          }
          else{
            return <h1>F</h1>
          }
        })()}
      </div>
      <Hero title="Learn React JS" desc="How to learn step by step" item={itemObj}/>

      {/* <h1 id="myheadLine"></h1> */}
      <h1 ref={(h1)=>myheadLine=h1}></h1>
      <button onClick={change}>Click</button><br/>
      <input ref={(a)=>firstname=a} type='text' placeholder='first name'/>
      <input ref={(a)=>lastname=a} type='text' placeholder='last name'/><br/>
      <div ref={myDiv}></div>
      <button onClick={fetchData}>Call Api</button>
      <button onClick={ShowData}>Show Api</button><br/>
      <div></div>
    </>
  ); 
}
export default App;









