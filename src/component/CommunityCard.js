import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart as blankHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie'
import axios from 'axios';

export default function CommunityCard({ data }) {
  console.log(data?.id)
  console.log(data?.image)


  // 좋아요 기능 구현

    const [communityLike, setCommunityLike] = useState(false);
    const [userId, setUserId] = useState("");
    const [cookies, setCookie] = useCookies(["userEmail"]);
    const [countLiked, setCountLiked] = useState();

  const communityId = data?.id;

    useEffect(() => {

        const countLiked = async (e) => {
            await axios.post("http://localhost:8080/api/countCommunityLiked", {
                userId: null,
                communityId: communityId,
                liked: null
            }).then(res => {
                console.log("좋아요 개수", res);
                communityLike? setCountLiked(Number(res.data) + 1) : setCountLiked(Number(res.data));
            });
        }

        countLiked();

        if (cookies.userEmail !== undefined) {
            setUserId(cookies.userEmail);
        }
    })

    //좋아요 데이터 받아오기 잠시만 안녕

    // useEffect( () => {
    //     const fetchData = () => {
    //         const res = axios.get("http://localhost:8080/api/checkliked", {
    //             userId : userId,
    //             product : id,
    //             liked : null
    //         });
    //         res ? setLike(true) : setLike(false);
    //     }
    //     fetchData()
    // },[]);

    // 다시 해보자 이따가

    // const toggleLike = async (e) => {

    //     setCommunityLike(!communityLike);

    //     axios.post("http://localhost:8080/api/communityLiked", {
    //         userId : userId,
    //         communityId : communityId,
    //         liked : communityLike? true : false
    //     });

    
    //  else {
    //     alert("로그인이 필요합니다.");
    // }

  //좋아요 데이터 받아오기 잠시만 안녕

  // useEffect( () => {
  //     const fetchData = () => {
  //         const res = axios.get("http://localhost:8080/api/checkliked", {
  //             userId : userId,
  //             product : id,
  //             liked : null
  //         });
  //         res ? setLike(true) : setLike(false);
  //     }
  //     fetchData()
  // },[]);

  // 다시 해보자 이따가

  // const toggleLike = async (e) => {
  //
  //   setCommunityLike(!communityLike);
  //
  //   axios.post("http://localhost:8080/api/communityLiked", {
  //     userId: userId,
  //     communityId: communityId,
  //     liked: communityLike ? true : false
  //   });
  // }

  //

  console.log(`${data?.image}`)

  return (
    <div className='community-card-box'>
      <div className='writer-box'>
        <FontAwesomeIcon icon={faCircleUser} size='2x' />
        <p>{data?.user}</p>
      </div>

      <div className='title-box'>{data?.title}</div>

      <div className='content-img-box'>
        {/* {data?.image} */}
        {/* <img className='content-img' src={require(`../img/${data?.image}`)} alt='image' /> */}
        <img className='content-img' src={`http://localhost:30/images/${data?.image}`} alt='img' />
      </div>

      <div className='content-like-comment'>
          {communityLike ? <FontAwesomeIcon icon={blankHeart} like={communityLike} onClick={toggleLike} className='blankHeart' />
              : <FontAwesomeIcon icon={fullHeart} like={communityLike} onClick={toggleLike} className='fullHeart' />} {countLiked}
          {/* <div className='imgTest'>hello</div> */}
        {/* <FontAwesomeIcon icon={faComment} className='content-icon'/> */}
      </div>

      <div className='content-box'>{data?.content}</div>
    </div>
  )
}