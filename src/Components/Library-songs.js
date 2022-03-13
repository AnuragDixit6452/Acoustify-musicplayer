import React from 'react';
import {playAudio} from '../util1';
const LibrarySongs=({song,setCurrentSong,songs,key,audioRef,isPlaying,id,setSongs})=> {
    const songSelectHandler=()=>{
        const newSongs= songs.map(song=>{
            if(song.id===id){
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
        playAudio(isPlaying,audioRef);
        setSongs(newSongs);
        setCurrentSong(song);
         
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt="my test" ></img>
            <div className="song-description">
            <h3>{song.name} </h3>
            <h4>{song.Artist} </h4>
            </div>
        </div>
    )
}
export default LibrarySongs;