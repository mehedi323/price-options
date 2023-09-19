  
import './App.css'    
import LineCart from './Components/LineChart/LineCart'
import Navbar from './Components/Navbar/Navbar' 
import PriceOptions from './Components/PriceOptions/PriceOptions'
function App() { 
 
  return (
    <>  
      <Navbar></Navbar>
      <h1 className='text-4xl text-center mt-4 font-bold'>Price-Options-React</h1>  
      <PriceOptions></PriceOptions>
      <LineCart></LineCart>
    </>
  )
}

export default App
