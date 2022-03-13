import React from 'react';
const Song=({currentSong})=> {
    return(
        <div className="song-container">
            <img src={currentSong.cover} alt="my test" ></img>
            <h1>{currentSong.name} </h1>
            <h2>{currentSong.Artist} </h2>
        </div>
    )
}
export default Song;