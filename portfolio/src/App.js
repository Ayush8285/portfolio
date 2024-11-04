import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import ScrollUp from './components/scrollup/ScrollUp'
import SoundBar from './components/sound/SoundBar'
import Work from './components/projects/Work'
import './App.css'
import Anchor from './components/anchor/Anchor'
import Qualification from './components/qualification/Qualification'

const App = () => {
  return (
    <>
      <Header/>
      {/* <Anchor/> */}
      <main className="main">
        <Home/>
      <Skills/>
      <Qualification />
      {/* <Work/> */}
      <Contact/>
      </main>
      <SoundBar/>
      <ScrollUp />
    </>
  )
}

export default App
