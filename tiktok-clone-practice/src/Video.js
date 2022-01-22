import React, { useReducer, useRef, useState } from 'react'
import "./Video.css"

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
        loop src="https://v16-webapp.tiktok.com/46c044bdab2d8403273ddf633fcffb35/61ebb538/video/tos/alisg/tos-alisg-pve-0037/7b1686462d9449268cc902db8ce2e574/?a=1988&br=5850&bt=2925&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThLKeAlXq&l=202201220141350102230791450C8383DF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajV0NmdqOm85dzMzNTczM0ApZDM3OmZmOGQ8NzY7aWlnPGdqZmk2Y3EtMjZfLS1eMTRzczRgLjYtXi1eLjMtYjFjXjA6Yw%3D%3D&vl=&vr="></video>
        {/*<VideoFooter/> */}
        {/*<VideoSidebar/> */}
    </div>
    )
}

export default Video