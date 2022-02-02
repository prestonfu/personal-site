import React from "react";

export default function Button(item) {

  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div key={item.label} className="tag-wrapper">
        <p className="text-xs sm:text-sm font-inter">{item.label}</p>
      </div>
    </a>
  )
}