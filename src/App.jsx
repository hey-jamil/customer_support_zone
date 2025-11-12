import { useState } from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {

    const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState([])
  const [customers, setCustomers] = useState([])

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={inProgress} resolved={resolved}></Banner>
    </>
  )
}

export default App
