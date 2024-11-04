import React from 'react'
import './scrollup.css'

const ScrollUp = () => {
    let calcScrollValue = ()=>{
        let scrollProgress = document.getElementById("progress");
        let pos = document.documentElement.scrollTop;
        
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos*100) / calcHeight);
    
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }   
    
        scrollProgress.addEventListener("click", ()=> {
            document.documentElement.scrollTop = 0;
        });
    
        scrollProgress.style.background = `conic-gradient(#333333 ${scrollValue}%, #c0c0c0 ${scrollValue}%)`
    }
    window.onscroll = calcScrollValue;
  return (
    <div id="progress">
            <span id="progress-value">
                <i class='bx bxs-chevrons-up' ></i>
            </span>
    </div>
  )
}

export default ScrollUp
