import React from 'react';
import { Home, Navbar, Products, About } from './components'

const App = () => {
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