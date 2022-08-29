import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Main from './page/Main'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Test from './Test';
import ProductDetail from './page/Porudct/ProductDetail';
import { useState, useEffect } from 'react';
import Login from './page/Login';
import Search from './page/Search';
import Join from './page/Join';
import BottomNavbar from './component/BottomNavbar';
import PrivateRoute from './route/PrivateRoute';

function App() {
  
  const [authenticate, setAuthenticate] = useState(false); // true: 로그인 성공, false: 로그인 실패

  useEffect(()=>{
    console.log("Aaaa",authenticate);
  },[authenticate]);

  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("/test")
      .then(res => res.text())
      .then(m => setMessage(m))
  }, [])
  console.log(message);

  const [test, setTest] = useState("");
  useEffect(()=>{
    fetch("/loginTest")
      .then(res => res.text())
      .then(m => setTest(m))
  }, [test])
  console.log(test);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/join' element={<Join />} />

        <Route path='/mypage' element={<PrivateRoute authenticate={authenticate}/>} />

        <Route path='/test' element={<Test />} />

        <Route path='/product/:id' element={<ProductDetail />} />

        <Route path='/search' element={<Search />} />

      </Routes>

      <BottomNavbar />
    </div>
  );
}

export default App;
