// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Card from './Card';
import Sdata from './Sdata';

function ncard(val)
{
  return (
    <Card imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}/>
  );
}

const favSeries = "Netflix";

const Favs = ()=>{

if(favSeries === "Netflix")
{
  return (
    <Card 
    key={Sdata[0].key}
    imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].links}/>
  );
}
else
{
  return(
    <Card 
    key={Sdata[1].key}
    imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].links}/>
  );
}
}

// const state = useState();
// console.log(state);
let count=1;
// const [count,setCount] = useState(5);
const IncNum = ()=>{
  console.log("clicked"+count++);
}





const App = () =>{
   let time= new Date().toLocaleDateString();
   const[ctime,setCount] = useState(time);
   const [name , setName]= useState({
     fname:'',
     lname:'',
   });

  //  const {value,fullname}= event.target;
  // setName((preValue)=>{
  //   if(name === "fname")
  //   {
  //   return {
  //     fname:value,
  //   }
  // }
  // })

  const UpdateTime = ()=>{
    time = new Date().toLocaleTimeString();
    setCount(time);
  }
  setInterval(UpdateTime,1000);

  const TextVal = (event)=>{
    console.log(event.target.value);
    // const {value,fullname} = event.target.value;
  }

  const onSubmit = ()=>{
    setName("name");
  }

  //
  const TextInputValue = (event)=>{
    console.log(event.target.value);
  }
  const [firstname,setFullName] = useState();

  const OnFormSubmit = ()=>{
    setFullName(firstname);
  }
  return (
    <>
    <h1>{ctime}</h1>  
    <h2>{firstname}</h2>

    <input type="text" name="fname" placeholder="Enter name" onChange={TextVal} value={name.fname}/>
    <input type="text" name="lname" placeholder="Enter name" onChange={TextVal} value={name.lname}/>
    <button onClick={onSubmit}>Submit</button>

    <input type="text" placeholder='Enter your name' onChange={TextInputValue} value={firstname}/>
    <button onClick={OnFormSubmit}>Save</button>

     {/* { Sdata.map(ncard)}; */}
     {/* {Sdata.map((val)=>{
      return(
        <Card 
        key={val.key}
        imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}/>
      );
     })} */}
     <h2>{count}</h2>
     <button onClick={IncNum}>click Me</button>
    </>
  ); 
}

export default App;
