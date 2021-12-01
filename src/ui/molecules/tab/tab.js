import React from 'react'

import tabStyles from './tab.module.css'

export const Tab = ({ name, isActive = false, onClick }) => {
  const className = isActive ? `${tabStyles.tab} ${tabStyles.active}` : `${tabStyles.tab}`

  return (
    <div className={className} onClick={onClick}>
      <span>{name}</span>
      {isActive ?  <div className={tabStyles.line} /> : null}
    </div>
  )
}