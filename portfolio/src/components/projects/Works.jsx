import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import WorksItems from './WorksItems.jsx'

const Works = () => {
    const [item, setItem] = useState({name:'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData)
        }
        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects)
        }

    }, [item])

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index)
    }

  return (
   <>
    <div className="work_filters">
        {projectsNav.map((item, index) => {
            return <span className={`${active === index ? 'active-work' : '' } work_item`} key={index} onClick={(e) => {
            handleClick(e,index)
            }}>{item.name}</span>
        } )}
    </div>

    <div className="projects_container ">
        {projects.map((item)=> {
            return <WorksItems item={item} key={item.id} />
        })}
    </div>
   </>

  )
}

export default Works
