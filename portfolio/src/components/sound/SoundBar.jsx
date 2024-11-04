import React, {useRef, useState} from 'react'
import './soundBar.css';
import music from '../../assets/musix1.mp3'

const SoundBar = () => {
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

  return (
  <div className='sound_container' onClick={() => handleClick()} >
        {!click ?<i class='bx bxs-caret-right-circle' style={{color:'#da0c0c'}}  ></i>: <i class='bx bx-pause-circle'  style={{color:'#da0c0c'}} ></i>}
                    <audio src={music} ref={ref} loop />
                </div>  
  )
}

export default SoundBar
