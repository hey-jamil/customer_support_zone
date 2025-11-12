import { Suspense, useState } from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Cards from './Components/Cards/Cards'

const fetchCustomer = async () => {
  const res = await fetch('/customerzone.json')
  return res.json()
}

const customerPromise = fetchCustomer()

function App() {
   console.log("this is app component")
    const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState([])
  const [customers, setCustomers] = useState([])

  return (
    <>
      <Navbar></Navbar>
      <Banner inProgress={inProgress} resolved={resolved}></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Cards customers={customers} setCustomers={setCustomers} resolved={resolved} setResolved={setResolved} customerPromise={customerPromise} setInProgress={setInProgress} inProgress={inProgress}></Cards>
     </Suspense>
    </>
  )
}

export default App
