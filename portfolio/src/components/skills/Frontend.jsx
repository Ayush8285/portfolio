import React from 'react'

const Frontend = () => {
  return (
      <div className="skills__content">
        <h3 className="skills__title">Frontend Skills</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-html5 bx-rotate-270 bx-tada' style={{color:'#f06529'}}  ></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-css3 bx-rotate-270 bx-tada' style={{color:'#2965f1'}}  ></i>
                <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-javascript bx-rotate-270 bx-tada' style={{color:'#f0db4f'}}  ></i>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-bootstrap bx-rotate-270 bx-tada' style={{color:'#563d7c'}} ></i>
                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* <div className="skills__data">
                <i class='bx bxl-sass bx-rotate-270 bx-tada' style={{color:'#cc6699'}}  ></i>
                <div>
                    <h3 className="skills__name">SASS</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div> */}

                <div className="skills__data">
                <i class='bx bxl-react bx-rotate-270 bx-tada' style={{color:'#61DBFB'}} ></i>
                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Frontend
