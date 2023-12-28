 import React from 'react'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import UserAuth from './components/UserAuth'
import Home from './Pages/Home'
 
 const App = () => {
   return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/userauth' element={<UserAuth/>}/>
    </Routes>
    </BrowserRouter>
     
   )
 }
 
 export default App