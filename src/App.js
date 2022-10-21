import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Main from './page/Main'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Test from './Test';
import ProductDetail from './page/Proudct/ProductDetail';
import { useState, useEffect } from 'react';
import Login from './page/LoginComponent';
import Search from './page/Search';
import JoinComponent from './page/JoinComponent';
import BottomNavbar from './component/BottomNavbar';
import PrivateRoute from './route/PrivateRoute';
import Product from './page/admin/product/Product';
import Member from './page/admin/member/Member';
import Admin from './page/admin/Admin';
import ProductInsert from './page/admin/product/ProductInsert';
import TestCreate from './page/admin/product/TestCreate';
import Community from './page/community/Community';
import TestComponent from './page/TestComponent';
import Category from './page/Category';
import Swal from 'sweetalert2';
import { useSearchParams } from 'react-router-dom';
import ProductSearch from './page/Proudct/ProductSearch';
import Recommendation from './page/Recommend/Recommendation';
import CommunityInsert from './page/community/CommunityInsert';
import ImageUploadBox from './test/ImageUploadBox';
import Recommend from './component/Recommend';
import DataRecommend from './page/Recommend/DataRecommend';
import About from './page/About';

function App() {

  const [authenticate, setAuthenticate] = useState(false); // true: 로그인 성공, false: 로그인 실패

  useEffect(() => {
    console.log("로그인 상태 : ", authenticate);
  }, [authenticate]);

  // const [message, setMessage] = useState("")
  // useEffect(() => {
  //   fetch("/api/testConnection")
  //     .then(res => res.text())
  //     .then(m => setMessage(m))
  // }, [])
  // console.log(message);

  const [test, setTest] = useState("");
  useEffect(() => {
    fetch("/api")
      .then(res => res.text())
      .then(m => setTest(m))
  }, [])
  console.log("spring boot 연결 성공 >> " + test);
  
  // flask data 불러오기
  const [recommend, setRecommend] = useState("")

  const getRecommend = () => {
    fetch("/recommend")
      .then(res => res.json())
      .then(m => setRecommend(m))
  }

  // recommend -> object to array
  var recommendArray = [];
  const count = Object.keys(recommend).length;
    for(var i = 0; i < count; i++) {
      var data = recommend[i];
      recommendArray.push(data);
      // console.log("recommend [i] -> ",data)
    }

  useEffect(()=>{
    getRecommend();
  }, [setRecommend]);
  console.log("recommend", recommend);
  console.log("recommendArray", recommendArray)


  // product DB 불러오기
  const [product, setProduct] = useState();
  const [productSearch, setProductSearch] = useState();
  const [query, setQuery] = useSearchParams();

  const getProducts = () => {
    fetch(`/api/products/`)
      .then(res => res.json())
      .then(m => setProduct(m))
  }

  useEffect(() => {
    getProducts();
  }, [product]);
  console.log("product", product);

  // community DB 불러오기
  const [community, setCommunity] = useState();
  const getCommunity = () => {
    fetch(`/api/community`)
      .then(res => res.json())
      .then(m => setCommunity(m))
  }

  useEffect(() => {
    getCommunity();
  }, [community])
  console.log("community", community);

  
  // const getProductsSearch = () => {
  //   let serchQuery = query.get("q") || "";
  //   console.log("쿼리값은?", serchQuery)
  //   fetch(`/api/products?q=${serchQuery}`)
  //     .then(res => res.json())
  //     .then(m => setProductSearch(m))
  // }

  // useEffect(() => {
  //   getProductsSearch();
  //   console.log("productSearch", productSearch);
  // }, [query]);


  useEffect(() => {
    Swal.fire({
      icon: "warning",
      title: "모바일 버전으로 확인해주세요!",
      text: '회원의 경우 모바일 버전으로, 관리자의 경우 데스크탑 버전으로 이용해주세요. 관리자 모드는 /admin 으로 진입 가능합니다.',
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((res) => {
      /* Read more about isConfirmed, isDenied below */
      if (res.isConfirmed) {
        //삭제 요청 처리
      }
      else {
        //취소
      }
    });
  }, [])


  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Main product={product} />} />

        {/* <Route path='/login' element={<LoginComponent setAuthenticate={setAuthenticate} />} /> */}
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/join' element={<JoinComponent />} />

        <Route path='/category' element={<Category product={product} />} />
        <Route path='/mypage' element={<PrivateRoute authenticate={authenticate} />} />

        <Route path='/search' element={<Search />} />

        <Route path='/about' element={<About />} />

        {/* 커뮤니티 페이지 */}
        <Route path='/community' element={<Community community={community}/>} />
        <Route path='/commuInsert' element={<CommunityInsert/>} />

        {/* 상품 관련 페이지 */}
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/productSearch/:keyword' element={<ProductSearch />} />

        {/* 추천 데이터 관련 페이지 :: 취향자리*/}
        <Route path='/datarecommend' element={<DataRecommend recommend={recommendArray}/> } />

        {/* 관리자 페이지 */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/product' element={<Product product={product} />} />
        <Route path='/admin/product/insert' element={<ProductInsert />} />
        <Route path='/admin/member' element={<Member />} />

        {/* Test 페이지 */}
        <Route path='/test' element={<Test community={community} />} />
        <Route path='/testComponent' element={<TestComponent setAuthenticate={setAuthenticate}/>}/>
        <Route path='/recommend' element={<Recommendation />} />
        <Route path='testImage' element={<ImageUploadBox />} />

      </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
