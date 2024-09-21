import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Classes from './components/Classes'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {


  return (
    <>
     <NavBar />
     <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/classes" element = {<Classes />} />
        <Route path = "/pricing" element = {<Pricing />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
     </Routes>
     <Footer />
    </>
  )
}

export default App
