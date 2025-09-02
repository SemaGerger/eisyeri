  import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/test/TestPage';
import PartnersPage from './pages/partners/PartnersPage';
import About from './pages/About';
import Contact from './pages/Contact';
import AboutPresident from './pages/AboutPresident';
import Logomuz from './pages/Logomuz';
import PartnerDetailsPage from './pages/partners/PartnerDetailsPage';


export default function App() {
  return (
     <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/aboutPresident' element={<AboutPresident />}></Route>
          <Route path='/esitisyerleri' element={<PartnersPage />}></Route>
          <Route path='/details/:id' element={<PartnerDetailsPage />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/logomuz' element={<Logomuz />}></Route>
         
           
          
          </Routes>
        </Router>
  )
}