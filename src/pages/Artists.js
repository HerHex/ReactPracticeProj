import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import QueryProvider from '../components/Navbar/Context';

function Artists() {
  return (
    <QueryProvider>
    <div className="App-navbar">
      <Navbar />
    </div>
    <div>Artist page. WIP</div>
  </QueryProvider>
  )
}

export default Artists