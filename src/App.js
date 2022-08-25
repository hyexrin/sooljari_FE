import logo from './color-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Main from './page/Main'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mypage from './page/Mypage';
import Test from './Test';
import ProductDetail from './page/Porudct/ProductDetail';
import { useState, useEffect } from 'react';
import Login from './page/Login';
import Search from './page/Search';

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("/test")
      .then(res => res.text())
      .then(m => setMessage(m))
  }, [])
  console.log(message);

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/login' element={<Login/>}/>

        <Route path='/test' element={<Test/>}/>

        <Route path='/product/:id' element={<ProductDetail />} />

        <Route path='/search' element={<Search/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
