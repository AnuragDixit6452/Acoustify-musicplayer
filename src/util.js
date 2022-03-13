import { v4 as uuidv4 } from 'uuid';
//images
import image1 from './wallapapers/Image1.png';
import image2 from './wallapapers/Image2.png';
import image3 from './wallapapers/Image3.png';
import image4 from './wallapapers/Image4.png';
import image5 from './wallapapers/Image5.png';
import image6 from './wallapapers/Image6.png';
import image7 from './wallapapers/Image7.png';
import image8 from './wallapapers/Image8.png';
import image9 from './wallapapers/Image9.png';


//songs
import khafajoh from './Components/songs/khafajoh.mp3';
import merebina from './Components/songs/merebina.mp3';
import dekhlena from './Components/songs/dekhlena.mp3';
import aashiyan_edited_hardik from './Components/songs/aashiyan_edited_hardik.wav';
import humnava from './Components/songs/Humnava_hardik.wav';
import tumhiho from './Components/songs/tumhiho.mp3';
import lochaaeulfat from './Components/songs/lochaaeulfat.mp3';
import humnavaunedited from './Components/songs/humnavaunedited.mp3';
import wheniwasurman from './Components/songs/wheniwasurman.mp3';

function Anurag(){
    return[
            {
                name: "Dekh Lena",
                Artist:"A N U R A G",
                cover:image1,
                id: uuidv4(),
                active:true,
                audio: dekhlena,
                color:['#F8B682','#F6907A'],
            },
            {
                name:"Khafa Joh (Composed)",
                Artist:"A N U R A G",
                cover:image2,
                id: uuidv4(),
                active:false,
                audio:khafajoh,
                color:['#E39438','#F7FD50'],
            },
            {
                name:"Aashiyan",
                Artist:"A N U R A G",
                cover:image3,
                id: uuidv4(),
                active:false,
                audio:aashiyan_edited_hardik,
                color:['#3F5425','#773830'],
            },
            {
                name:"Mere Bina",
                Artist:"A N U R A G",
                cover:image4,
                id: uuidv4(),
                active:false,
                audio:merebina,
                color:['#916B51','#AFC0C7'],
            },
            {
                name:"Humnava",
                Artist:"A N U R A G",
                cover:image5,
                id: uuidv4(),
                active:false,
                audio:humnava,
                color:['#1A1A1A','#777777'],
            },
            {
                name:"Tum hi ho",
                Artist:"A N U R A G",
                cover:image6,
                id: uuidv4(),
                active:false,
                audio:tumhiho,
                color:['#B26A74','#565285'],
            },
            {
                name:"Locha-ae-Ulfhat",
                Artist:"A N U R A G",
                cover:image7,
                id: uuidv4(),
                active:false,
                audio:lochaaeulfat,
                color:['#E2837D','#FAA282'],
            },
            {
                name:"Humnava Un-Edited",
                Artist:"A N U R A G",
                cover:image8,
                id: uuidv4(),
                active:false,
                audio:humnavaunedited,
                color:['#FBB78B','#5F7B8F'],
            },
            {
                name:"When I was your Man",
                Artist:"A N U R A G",
                cover:image9,
                id: uuidv4(),
                active:false,
                audio:wheniwasurman,
                color:['#FC715C','#885679'],
            },
        ];
}

export default Anurag;