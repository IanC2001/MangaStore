import './App.css';
import React from 'react'
import Cabecera from './components/Cabecera';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';



const App = () => {
  return (
      <BrowserRouter>

      <Cabecera />

      <Navbar />

      

      <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
            <Route exact path="/Cart" element={<Cart/>}/>
            <Route exact path='/categoria/:id' element ={<ItemListContainer/>}/>
            <Route exact path='/item/:id' element ={<ItemDetailContainer/>}/>
      </Routes>

      

       
        
        {/* <Main /> */}
      </BrowserRouter>
  )
}

export default App;