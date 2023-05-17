// import logo from './logo.svg';
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


function App() {
  return (
    <>
      
      
     {/* { Sdata.map(ncard)}; */}
     {Sdata.map((val)=>{
      return(
        <Card 
        key={val.key}
        imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}/>
      );
     })}
    </>
  );
}

export default App;
