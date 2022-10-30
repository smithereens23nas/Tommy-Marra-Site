import React from 'react';
import { useState } from 'react';
import { Home, Navbar, Products, About } from './components'

const App = () => {
const [products, setProducts] = useState([]);
const [cart, setCart] = useState({})


// const fetchCart = async () => {
//   const response = await 
// }
  return (
    <div>
    <Navbar />
    <Home />
    <About />
<Products />
</div>
    )
}

export default App