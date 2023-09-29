import React from 'react'
import { projects } from '../data/projects';
const GalleryIndex = () => {
  return (
    <div>
    {projects.map(project => (
      <div key={project.id}>
        {/* <img src={project.thumbnail} alt={project.title} /> */}
        <h2>{project.title}</h2>
        <h3>{project.subtitle}</h3>
        <p>{project.description}</p>
        <p>{project.location}</p>
      </div>
    ))}
  </div>
  )
}

export default GalleryIndex
