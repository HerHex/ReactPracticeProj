import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import QueryProvider from '../components/Navbar/Context';

function About() {
  return (
    <QueryProvider>
    <div className="App-navbar">
      <Navbar />
    </div>
    <div>Created this project to learn some stuff ! </div>
  </QueryProvider>
  )
}

export default About