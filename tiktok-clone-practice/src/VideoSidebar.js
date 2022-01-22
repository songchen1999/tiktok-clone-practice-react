import React, { useState } from "react";
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';

export default function VideoSidebar(){

    const [liked,setLiked] = useState(false);

    function like () {
        if (liked){
            setLiked(false)
        }
        else{
            setLiked(true)
        }
    }

    return (
        <div className="videoSidebar">
            <div className="videoSide_button" onClick={like}>
                {liked?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                <p>{liked? "301":"300"}</p>
            </div>
            <div className="videoSide_button">
                <ShareIcon/>
                <p>300</p>
            </div>
            <div className="videoSide_button">
                <MessageIcon/>
                <p>300</p>
            </div>
        </div>
    )
}