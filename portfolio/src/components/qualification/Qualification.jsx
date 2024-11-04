import React, { useEffect, useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>
        <div className="qualification__container container">
        <div className="qualification__sections">
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack MERN</h3>
                            <span className="qualification__subtitle">Self Projects</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>2023 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Backend M, E, N</h3>
                            <span className="qualification__subtitle">Udemy Course</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>2022 - 23
                            </div>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">React</h3>
                            <span className="qualification__subtitle">Udemy Course</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>2021 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Designing</h3>
                            <span className="qualification__subtitle">Udemy Course</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>2021
                            </div>
                        </div>
                    </div>
                </div>


                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Python Programming Course</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            {/* <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>July, 2024 - <span style={{fontStyle:'italic'}} >Currently</span> 
                            </div> */}
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Designing Course</h3>
                            <span className="qualification__subtitle">Udemy</span>
                            {/* <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>Feb, 2024 - April, 2024 
                            </div> */}
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Java Programming Course</h3>
                            <span className="qualification__subtitle">Head First</span>
                            {/* <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>2024 - present
                            </div> */}
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Other Internship Approval projects</h3>
                            {/* <span className="qualification__subtitle">Cant be shared</span> */}
                            <div className="qualification__calender">
                                <i className="uil uil-calander-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
      </section>
  )
}

export default Qualification
