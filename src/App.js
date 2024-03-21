import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/contact' element={<Contact /> } />
      </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App;
