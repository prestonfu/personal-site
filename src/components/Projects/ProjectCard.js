import React from "react";

export default function ProjectCard({
  title,
  tags,
  description,
  imgSrc
}) {
  return (
    <div className="hover-border">
      <div className="project-grid">
        <div className="col-start-1 col-end-2 pr-0 md:pr-10">
          <img src={imgSrc} alt={title} />
          <div className="h-6 md:h-0"></div>
        </div>
        <div className="col-start-2 sm:mt-0 col-end-2">
          <h3 className="text-xl sm:text-2xl">{title}</h3>
          <div className="flex flex-wrap mt-2">
            {tags.map((item) => (
              <a href={item.url} target="_blank" rel="noreferrer">
                <div key={item.label} className="tag-wrapper">
                  <p className="text-xs sm:text-sm font-inter">{item.label}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}