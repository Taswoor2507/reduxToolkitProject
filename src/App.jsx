import React from 'react'
import Products from './components/Products'
import Header from './components/Header'
import Cart from './components/Cart'
const App = () => {
  return (
    <>
    <Header/>
      <Products/>
      <hr/>
      <Cart/>
    </>
  )
}

export default App