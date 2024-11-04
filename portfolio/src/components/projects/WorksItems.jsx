import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work_card" key={item.id} >
        <img src={item.image} alt={item.title} className='work_img'  />
        <h3 className="work_title">{item.title}</h3>
        <h4 className='work_button' >{item.exampleId}{item.pass}</h4>
        {/* <h4 className='work_button demo' >{item.pass}</h4> */}
        <a target='blank' href={item.link} className="work_button">
            Demo <i className="bx bx-right-arrow-alt demo-arrow work_button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItems
