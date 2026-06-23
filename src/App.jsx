import { useState } from 'react'
import './App.css'
import Background from './components/Background'

function App() {

  return (
    <>
    {/* Background for the site */}
      <Background/>
      
      <div className='min-h-[50vh]'>First</div>
      <div className='min-h-[50vh]'>Second</div>
      <div className='min-h-[50vh]'>Third</div>
    </>
  )
}

export default App
