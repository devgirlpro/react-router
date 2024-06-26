import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/users/:id' element={<User />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
