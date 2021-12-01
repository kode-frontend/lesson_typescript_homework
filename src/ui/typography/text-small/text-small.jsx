import React from 'react'

import textSmallStyles from './text-small.module.css'

export const TextSmall = ({ children }) => {
  return (
    <h1 className={textSmallStyles['text-small']}>{children}</h1>
  )
}
