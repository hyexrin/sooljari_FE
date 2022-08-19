import logo from './color-logo.png';
import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './page/Main'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Mypage from './page/Mypage';
import Test from './Test';
import ProductDetail from './page/Porudct/ProductDetail';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/mypage' element={<Mypage />}/>
          <Route path='/test' element={<Test />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
        </Routes>

    </div>
  );
}

export default App;
