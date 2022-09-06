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
import Product from './page/admin/product/Product';
import Member from './page/admin/member/Member';
import Admin from './page/admin/Admin';
import ProductInsert from './page/admin/product/ProductInsert';
import Community from './page/community/Community';

function App() {

  const [authenticate, setAuthenticate] = useState(false); // true: 로그인 성공, false: 로그인 실패

  useEffect(() => {
    console.log("로그인 상태 : ", authenticate);
  }, [authenticate]);

  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("/test")
      .then(res => res.text())
      .then(m => setMessage(m))
  }, [])
  console.log(message);

  const [test, setTest] = useState("");
  useEffect(() => {
    fetch("/test/hello")
      .then(res => res.text())
      .then(m => setTest(m))
  }, [])
  console.log(test);

  const [product, setProduct] = useState();

  const getProducts = () => {
    fetch("/api/products")
      .then(res => res.json())
      .then(m => setProduct(m))
  }

  useEffect(() => {
    getProducts();
    console.log(product);
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main product={product}/>} />

        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/join' element={<Join />} />

        <Route path='/mypage' element={<PrivateRoute authenticate={authenticate} />} />
        <Route path='/community' element={<Community />}/>
        <Route path='/search' element={<Search />} />

        {/* 상품 관련 페이지 */}
        <Route path='/product/:id' element={<ProductDetail />} />

        {/* 관리자 페이지 */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/product' element={<Product product={product} />} />
        <Route path='/admin/product/insert' element={<ProductInsert />} />
        <Route path='/admin/member' element={<Member />} />

        {/* Test 페이지 */}
        <Route path='/test' element={<Test />} />

      </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
