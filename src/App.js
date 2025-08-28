import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './components/test/TestPage';
import PartnersPage from './pages/PartnersPage';

export default function App() {
  return (
     <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/esitisyerleri' element={<PartnersPage />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
      </Router>
  )
}