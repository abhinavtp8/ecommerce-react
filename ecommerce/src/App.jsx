import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import HomeLayout from './components/home/HomeLayout'
import Home from './components/home/Home'
import Products from './pages/Products'
import Counter from './components/Counter'
import RegistrationForm from './pages/RegistrationForm'
import Cart from './pages/Cart'
// import Login from './pages/Login'
// import Products from './components/Products'
// import Home from './pages/Home'
// import HomeLayout from './components/HomeLayout' // Make sure HomeLayout is in src/components/

const App = () => {
  return (
    <>
      <Routes>
        {/* Auth Route - Standalone page without Navbar/Footer */}
        <Route path='/login' element={<Login />} />

        {/* Main Layout Routes - Pages inside here will get Navbar and Footer */}
        <Route path="/" element={<HomeLayout />}>
          {/* Main Home Page */}
          <Route index element={<Home />} />

          {/* Products Page inside the Layout */}
          <Route path='products' element={<Products />} />
          <Route path="products/:id" element={<Products />} />

          {/* Future Product Details Route */}
          {/* <Route path='products/:prodId' element={<ProductDetails/>}/> */}

          <Route path='counter' element={<Counter />} />
          <Route path='registrationform' element={<RegistrationForm />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App