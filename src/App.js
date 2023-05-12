import {useState,useEffect} from 'react'
import './App.css';
import Intro from './components/Intro.jsx'
import axios from 'axios';
import './components/Intro1.css'
function App() {
  const [fetch,setFetch] = useState([]);
  const f =  async ()=>{
      const data = await axios.get("https://fakerapi.it/api/v1/persons?_locale=fr_FR");
      setFetch(data.data.data);
      console.log(data.data.data);
    }
  useEffect(()=>{
    f();
  },[])
  return (
    <>
    <Intro />
      <ul>
        {
          fetch.length > 0 ? 
          (fetch.map((item)=>{
            return (
            <>
            <li className='data-div' key={item.id}>
              <span>Name: {item.firstname} {item.lastname}</span> 
              <span>Email: {item.email}</span> 
              <span>Phone: {item.phone}</span> 
              <span>Website: {item.website}</span> 
              </li>
            </>)
          })): (<p> Loding.... </p>)
        } 
        </ul>
    </>
  );
}

export default App;
