import React from 'react';
import ProjectCard from '../components/Projects/ProjectCard';

function Projects(title, data) {
  return (
    <div className="h-auto">
      <div className="h-20" />
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <div className="h-12" />
        <h2 className="text-center sm:text-center page-header">
          <b>{title}</b>
        </h2>
        <div className="h-8" />
        <div className="px-8 sm:pr-16 sm:pl-0 mt-12">
          {data.map((item) => (
            <div id={item.id}>
              <ProjectCard
                title={item.title}
                tags={item.tags}
                description={item.description}
                imgSrc={item.imgSrc}
                projectLink={item.projectLink}
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