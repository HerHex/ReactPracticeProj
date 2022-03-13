import { Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Context } from "../components/Navbar/Context";
import QueryProvider from '../components/Navbar/Context';

function Artists() {
  return (
    <QueryProvider>
    <div className="App-navbar">
      <Navbar />
    </div>
  </QueryProvider>
  )
}

export default Artists