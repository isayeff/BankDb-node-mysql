import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './components/Cards'
import Create from './pages/Create'
import ContextData from './data/ContextData'

const App = () => {
  return (
    <>
      <ContextData>
        <Header />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
        </Routes>
        <Footer />
      </ContextData>
    </>
  )
}

export default App