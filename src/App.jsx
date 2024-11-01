import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog/Catalog'
import Work from './components/Work/Work'
const App = () => {
  return (
   <>
   <Header/>
   <Hero/>
   <Catalog/>
   <Work/>
   </>
  )
}

export default App