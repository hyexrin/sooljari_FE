import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custum-react-datepicker.css'
import './App.css';
import Navbar from './component/Navbar';
import Main from './page/Main'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Test from './Test';
import ProductDetail from './page/Proudct/ProductDetail';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
import Survey from './page/survey/Survey';
import SurveyResult from './page/survey/SurveyResult';
import WriteCalendar from './page/Calendar/WriteCalendar';
import Diary from './component/Diary';

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
  }, []);
  console.log("product", product);
  

  // calendar DB 불러오기
  const [calendar, setCalendar] = useState();

  const getCalendar = () => {
    fetch(`/api/calendars/`)
      .then(res => res.json())
      .then(m => setCalendar(m))
  }

  useEffect(() => {
    getCalendar();
  }, [])
  console.log("calendar", calendar);

  
  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/checkJWT", {withCredentials : true})
  //       .then(res => {
  //         setUserName(res.data);
  //       })
  // },[setUserName])
  // console.log('userName', userName)

  // userName 정보 불러오기
  const getUserInfo = () => {
    axios.get("http://localhost:8080/api/checkJWT", {withCredentials : true})
    .then(res => {
      setUserName(res.data);
    })
  }
  useEffect(() => {
    getUserInfo();
  },[authenticate])
  console.log('userName', userName)

 //  mypage userName 불러오기
 //  const [userName, setUserName] = useState();
 //  const getUserName = () => {
 //    fetch(`/api/checkJWT`)
 //        .then(res => res.text())
 //        .then(userName => setUserName(userName))
 //  }
 //
 //  useEffect(() => {
 //    getUserName();
 //  }, [setUserName])


  // community DB 불러오기
  const [community, setCommunity] = useState();
  const getCommunity = () => {
    fetch(`/api/community`)
      .then(res => res.json())
      .then(m => setCommunity(m))
  }

  useEffect(() => {
    getCommunity();
  }, [])
  console.log("community", community);

  return (
    <div>

      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path='/' element={<Main product={product} />} />

        {/* 로그인 / 회원가입 페이지 */}
        {/* <Route path='/login' element={<LoginComponent setAuthenticate={setAuthenticate} />} /> */}
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/join' element={<JoinComponent />} />

        {/* */}
        <Route path='/category' element={<Category product={product} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />

        {/* 마이페이지 */}
        <Route path='/mypage' element={<PrivateRoute authenticate={authenticate} setAuthenticate={setAuthenticate} userName={userName} setUserName={setUserName} calendar={calendar} />} />

        {/* 주류기록달력 페이지 */}
        <Route path='/writeCalendar' element={<WriteCalendar product={product} />} />
        <Route path='/diary' element={<Diary />} />

        {/* 커뮤니티 페이지 */}
        <Route path='/community' element={<Community community={community}/>} />
        <Route path='/commuInsert' element={<CommunityInsert/>} />

        {/* 상품 관련 페이지 */}
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/productSearch/:keyword' element={<ProductSearch />} />

        {/* 추천 데이터 관련 페이지 :: 취향자리*/}
        <Route path='/datarecommend' element={<DataRecommend recommend={recommendArray} product={product} userName={userName}/> } />

        {/* 취향 설문 관련 페이지 */}
        <Route path='/survey' element={<Survey />} />
        <Route path='/result' element={<SurveyResult product={product}/>} />

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
