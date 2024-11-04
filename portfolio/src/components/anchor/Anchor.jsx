import { useEffect, useRef } from 'react'
import './anchor.css'
import {Chain, Hang} from '../anchor/AllSvg'


const Anchor = () => {

    
    const ref = useRef(null);
    const hiddenRef = useRef(null);


    useEffect(() => {
        
        const handleScroll = () => {

            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;
            
            let diff = Math.max(bodyHeight - (scrollPosition + windowSize) )
            //diff*100/scrollposition
            let diffP = (diff * 100) / (bodyHeight - windowSize) ;

            ref.current.style.transform = `translateY(${-diffP}%)`

            if(window.pageYOffset > 0){
                hiddenRef.current.style.display = 'none'
            }else{
                hiddenRef.current.style.display = 'block'

            }
        }

        window.addEventListener('scroll', handleScroll)
        
        return () =>  window.removeEventListener('scroll', handleScroll)
        
    }, [])

  return (
    <div className='container' >
    <div ref={hiddenRef} className='hidden preDisplay'>

    <Hang width={70} height={70} fill='currentColor' />
</div>
        <div className='slider' ref={ref}  >
            {
                [...Array(20)].map((x,id) => {
                    return <Chain key={id} width={25} height={25} fill='currentColor' className="chain" />
                })
            }
          
            <Hang className='hang' width={70} height={70} fill='currentColor'/>
        </div>
    </div>
  )
}

export default Anchor
