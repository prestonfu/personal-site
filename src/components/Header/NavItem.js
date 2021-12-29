import React from 'react'

export default function NavItem({ name, href }) {
  return (
    <a href={href}><p className="nav-link font-medium">{name}</p></a>
  )
}