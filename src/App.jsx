import { useState } from 'react'
import './App.css'
import { Nav } from './components/nav'
import { Main } from './components/main'
import { Sobre } from './components/sobre'
import { Tecnologias } from './components/tecnologias'
import { Projetos } from './components/projetos'
import { Footer } from './components/footer'


function App() {

  return (
    <div className="App">

      <Nav/>
      
      <Main/>

      <Sobre/>

      <Tecnologias/>

      <Projetos/>
      
      <Footer/>
    </div>
  )
}

export default App
