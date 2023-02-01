import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Axi from './pages/Axi'
import MultiImage from './pages/MultiImage'
import MultiDocs from './pages/MultiDocs'
// import Pagenotfound from './pages/Pagenotfound'
import SingleImage from './pages/SingleImage'

const App = () => {
  return <>
  
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path={"/multi-img-upload"} element={<MultiImage/>}></Route>
    <Route path={"/single-img-upload"} element={<SingleImage/>}></Route>
    <Route path="/axi" element={<Axi/>}></Route>
    <Route path="/Doc-upload" element={<MultiDocs/>}></Route>
    <Route path='*' element={<h1>page not found</h1>}></Route>
   </Routes>
   </BrowserRouter>
  
  </>
}

export default App