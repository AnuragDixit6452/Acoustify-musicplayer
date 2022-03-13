import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft,faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';
import {playAudio} from '../util1';

const Player=({currentSong,isPlaying,setisPlaying,audioRef,songInfo,setSongInfo,songs,setCurrentSong,setSongs})=> {
    const audioEventHandler=()=>{
        if(isPlaying){
            audioRef.current.pause();
            setisPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setisPlaying(!isPlaying);
        }
    }
    const timeCorrecter=(time)=>{
        return(
            Math.floor(time / 60) + ":" +("0" + Math.floor(time % 60)).slice(-2)
        );
    }
    
    const skipTrackHandler=(direction)=>{
        let currentIndex= songs.findIndex((song)=>song.id === currentSong.id);
        if(direction==='skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibrayHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction==='skip-back'){
            if((currentIndex -1 )% songs.length===-1){
                setCurrentSong(songs[songs.length -1]);
                playAudio(isPlaying,audioRef);
                activeLibrayHandler(songs[songs.length -1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibrayHandler(songs[(currentIndex - 1) % songs.length]);
        };
        playAudio(isPlaying,audioRef);
    }
    
    const rangeHandler=(e)=>{
        audioRef.current.currentTime=e.target.value;
        setSongInfo({
            ...songInfo,currentTime:e.target.value,
        })
    }
    const styleInput={
            transform: `translateX(${songInfo.animationPercentage}%)`,
    }
    const activeLibrayHandler=(nextPrev)=>{
        const newSongs= songs.map(song=>{
            if(song.id=== nextPrev.id){
                return{
                    ...song,
                    active:true
                }
            }
            else{
                return{
                    ...song,
                    active:false
                }
            }
        })
        
        setSongs(newSongs);
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{timeCorrecter(songInfo.currentTime)}</p>
               <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
                <input type="range" min="0" max={songInfo.duration || 0} 
                value={songInfo.currentTime} onChange={rangeHandler} 
                name="slider" id="" />
                <div className="animate-track" style={styleInput}></div>
                </div>
                <p>{songInfo.duration ? timeCorrecter(songInfo.duration): "00:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft}></FontAwesomeIcon>
                <FontAwesomeIcon className="play" size="2x" icon={isPlaying ? faPause: faPlay} onClick={audioEventHandler}></FontAwesomeIcon>
                <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={faAngleRight}></FontAwesomeIcon>
            </div>
            
        </div>
    );
};
 
export default Player;