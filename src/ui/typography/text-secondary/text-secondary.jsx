import React from 'react'

import textSecondaryStyles from './text-secondary.module.css'

export const TextSecondary = ({ children }) => {
  return (
    <h1 className={textSecondaryStyles['text-secondary']}>{children}</h1>
  )
}
