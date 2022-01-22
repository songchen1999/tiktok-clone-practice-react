import React, { useReducer, useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video(){
    const [play,setPlay] = useState(false)

    const videoRef = useRef(null)
    const onVideoPress = ()=>{
        if (play){videoRef.current.pause(); setPlay(false)}
        else {videoRef.current.play(); setPlay(true)}
    }

    return (
    <div className="video">
        <video className='video_player' ref={videoRef}
        onClick={onVideoPress}
        loop src="https://v16-webapp.tiktok.com/c331e7e78345515e13432bc06082434e/61ecc96e/video/tos/useast2a/tos-useast2a-pve-0068/f2437cb8e49948ccba50306dd8b157fc/?a=1988&br=3374&bt=1687&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThDIl5lXq&l=202201222117140102231000260C067D59&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=andobDs6ZjQ6OTMzNzczM0ApNTozZzU8Zjs3NzhlZzg2NWc2LS0vcjRfLi1gLS1kMTZzc19fXjYvYmAxY18uMjUzLi86Yw%3D%3D&vl=&vr="></video>
        <VideoFooter/>
        <VideoSidebar/>
    </div>
    )
}

export default Video