import React from 'react'
import "../main/Main.css"
import Header from '../header/Header'
import Routers from '../router/Routers'
import Footer from '../footer/Footer'

const Main = () => {
  return(    <div className='main'>
    <Header/>
    <Routers/>
    <Footer/>   
    </div>
    )

}

export default Main