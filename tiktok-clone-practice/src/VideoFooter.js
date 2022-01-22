import React from "react";
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CameraIcon from '@mui/icons-material/Camera';
import Ticker from 'react-ticker'

export default function VideoFooter(){
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@whatver</h3>
                <p>whatver youar thini ajjA6Yw</p>
                <MusicNoteIcon className="videoFooter_icon"/>
                <Ticker mode="smooth" className="videoFooter_ticker" >
                    {(index)=>(
                        <p>fasdfasdf dasfdsaf dafdsfd adfdas</p>
                    )}
                    
                </Ticker>
            </div>
            <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png"></img>
        </div>
    )
}