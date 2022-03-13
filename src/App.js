import React,{useState,useRef} from 'react';
import Player from './Components/Player';
import Song from './Components/Song';
import Nav from './Components/Nav';
import Library from './Components/Library';
import './Styles/app.scss';
import Anurag from './util';

function App() {
  const [songs,setSongs]=useState(Anurag());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  const [isPlaying,setisPlaying]=useState(false);
  const audioRef=useRef(null);
  const [songInfo,setSongInfo]=useState({
    currentTime:0,
    durationTime:0,
    animationPercentage:0,
})
  const[libraryStatus,setLibraryStatus]=useState(false);
  const timeupdateHandler=(e)=>{
    const current=e.target.currentTime;
    const duration=e.target.duration;
    const roundedCurrent=Math.round(current);
    const roundedDuration=Math.round(duration);
    const animation=Math.round((roundedCurrent/roundedDuration)*100);
    setSongInfo({...songInfo,
        currentTime:current,
        duration,
        animationPercentage:animation,
    })
}
const setSongHandler=async ()=>{
        let currentIndex= songs.findIndex((song)=>song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if(isPlaying) audioRef.current.play();
      
}
  return (
    <div className={`App ${libraryStatus ? 'library-active': '' }`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} /> 
      <Song currentSong={currentSong}/>
      <Player songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setisPlaying={setisPlaying}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}  />
      <audio  onLoadedMetadata={timeupdateHandler} ref={audioRef} source type="audio/mp3" src={currentSong.audio} onTimeUpdate={timeupdateHandler} onEnded={setSongHandler} > </audio>
    </div>
  );
}

export default App;
