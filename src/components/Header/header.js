import React from 'react';
import routes from '../../data/routes'

const Header = () => {
  return (
    <div>
      <div className="h-auto">
        <div className="absolute top-0 left-0 z-10 mt-5 ml-5">
          {routes.filter((l) => l.index).map((l) => (
            <div><a href={l.path}><p className="nav-name"><b>{l.label.toUpperCase()}</b></p></a></div>
          ))}
        </div>


        <div className="absolute top-0 right-0 z-10 mt-5 mr-5">
          <div className="flex items-center">
            {routes.filter((l) => !l.index).map((l) => (
              (
                (l.newtab) ? 
                (<div><a href={l.path} target="_blank"><p className="nav-link ml-5">{l.label}</p></a></div>) 
                : (<div><a href={l.path}><p className="nav-link ml-5">{l.label}</p></a></div>)
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header