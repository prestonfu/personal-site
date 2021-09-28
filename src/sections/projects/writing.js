import React from 'react';
import ProjectCard from '../../components/project-card';
import projectData from '../../data/projects/projectDataWriting.json'
import '../../index.css'
import '../hero-background.css'

const projData = projectData

const Projects = () => {
  return (
    <div className="h-auto">
      <div className="h-20" />
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <div className="h-12" />
        <h2 className = "text-center sm:text-center page-header">
          <b>WRITING</b>
        </h2>
        <div className="px-8 sm:pr-16 sm:pl-0 mt-12">
            {projData.map((data) => (
              <div id={data.projectID}>
                <ProjectCard
                  projectName = {data.projectName}
                  techStack = {data.techStack}
                  description = {data.description}
                  imgSrc = {data.imgSrc}
                  projectLink = {data.projectLink}
                />
                <div className="h-12"></div>
              </div>
            ))}
        </div>
        <div className="h-12" />
      </div>
    </div>
  )
}

export default Projects
