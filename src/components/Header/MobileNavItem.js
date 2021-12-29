import React from 'react'

export default function MobileNavItem({
  name,
  href
}) {
  const defaultStyles =
    'border-transparent font-inter text-semibold text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
  const navItemStyle = `trans-150 flex justify-items-stretch items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6 ${defaultStyles}`

  return (
    // <Link href={href}>
    <a className={navItemStyle} href={href}>{name}</a>
    // </Link>
  )
}