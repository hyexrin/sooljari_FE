import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus, faCircle, faGenderless } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import CommunityService from '../../service/CommunityService'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CommunityInsert(props) {

    // 업로드 이미지 미리보기
    const [fileImage, setFileImage] = useState("");
    const [serverImg, setServerImg] = useState(null);

    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        setServerImg(e.target.files[0]);

        const uploadFile = e.target.files[0];

        changeImageHandler(uploadFile.name);
        console.log("fileImage >> " + fileImage);
        console.log(uploadFile);
        console.log(uploadFile.name)

        const formData = new FormData();
        formData.append('files', uploadFile);

    };
    
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };

    // community DB 연동
    const [user, setUser] = useState('작성자');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [likes, setlikes] = useState(0);

    const changeUserHandler = (event) => {
        setUser(event.target.value);
    }

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    }

    const changeImageHandler = (img) => {
        setImage(img);
    }

    const changeContentHandler = (event) => {
        setContent(event.target.value);
    }

    // const changeLikesHandler = (event) => {
    //     setlikes(event.target.value);
    // }

    // 이미지 서버에 저장
    const [imgUrl, setImgUrl] = useState('');

    const createCommunity = async (event) => {
        console.log("createCommunity");
        event.preventDefault();

        let community = {
            user: user,
            title: title,
            image: image,
            content: content,
            likes: likes
        }

        console.log(community.title);
        console.log("community => " + JSON.stringify(community));
        CommunityService.createCommunity(community).then(res => {
            props.history.push('api/community');
        })
        navigate('/community');

        //
        console.log("@@@img@@@" + image);
        const formData = new FormData();
        formData.append('file', serverImg);
        // 서버의 upload API 호출
        const res = await axios.post("/img/upload", formData);
        console.log(res.data.url);
        setImgUrl(res.data.url);
    }

    const navigate = useNavigate();

    const community = () => {
        navigate('/community');
    }

    return (

        <Container className='commu-insert-container' onSubmit={community}>

            <div className='commu-insert-top-row'>
                <div className='commu-insert-top-col'><FontAwesomeIcon icon={faArrowLeft} onClick={() => deleteFileImage()} /></div>
                <div className='commu-insert-top-col'>새 게시물 만들기</div>
                <div className='commu-insert-top-col'><FontAwesomeIcon icon={faPlus} onClick={createCommunity} /></div>
            </div>

            <div className='commu-insert-content-row'>
                <div className='commu-wrapper'>
                    <div className='commu-insert-content-pic'>
                        <div>
                            {/* <div>사진을 여기에 끌어다 놓으세요</div> */}

                            {fileImage && (
                                <img className='commu-insert-content-pic' alt="sample" src={fileImage} style={{ margin: "auto" }} />
                            )}

                            <input className='commu-insert-content-picinput' type="file" onChange={saveFileImage} />
                        </div>
                    </div>
                </div>

                <div className='commu-insert-content-etc'>
                    <div className='commu-insert-content-user' type='text' placeholder='작성자명' onChange={changeUserHandler} ><FontAwesomeIcon icon={faCircle} className='commu-insert-content-profile' /><b>술자리MD</b> </div>
                    {/* <Form.Control className='commu-insert-content-input' type='text' placeholder='제목 입력 ...' onChange={changeTitleHandler} /> <br /> */}
                    <input className='commu-insert-content-input' type='text' placeholder='제목 입력 ...' onChange={changeTitleHandler} /> <br />
                    <textarea className='commu-insert-content-textarea' placeholder='내용 입력 ...' onChange={changeContentHandler} />
                </div>
            </div>
        </Container>

    )
}
