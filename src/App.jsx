import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './assets/fetch'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 style={{color:"red", backgroundColor: "yellow"}}>Hello World</h1>
   <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo maiores natus adipisci voluptas molestiae expedita ullam doloribus a, obcaecati possimus et quae, ducimus laborum ex nihil maxime animi soluta.</p>

   <div className="container-fluid shadow-sm">
    <div className="row">
    <div className="col border border-danger"></div>
    <div className="col border border-warning"></div>
    <div className="col border border-danger"></div>
    </div>
   </div>
   <Fetch/>
   </>
       
  )
}

export default App
