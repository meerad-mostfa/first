import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './componants1/Footer/Footer';
import Counter from './componants1/Counter';


function App() {
let[count,setCount]=useState(0);
 const changcount=()=>{
setCount(count+1);
  console.log(count);
 }
  return (
<>
<button onClick={changcount}>meerad abdo {count}</button>
</>
  )
}

export default App
