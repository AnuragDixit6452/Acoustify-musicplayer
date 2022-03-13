import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav=({libraryStatus,setLibraryStatus})=>{
    return(
        <nav>
            <h1>A C O U S T I F Y</h1>
            <button onClick={()=>setLibraryStatus(!libraryStatus)}>PlayList <FontAwesomeIcon icon={faMusic} /></button>
        </nav>
    )
}




export default Nav;