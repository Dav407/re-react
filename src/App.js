import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Paid from './component/Paid'
import Card from './component/Card'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Paid/>
      <Footer/>
    </div>
  )
}

export default App