import React from 'react'

import heading1Styles from './heading1.module.css'

export const Heading1 = ({ children }) => {
  return (
    <h1 className={heading1Styles.heading1}>{children}</h1>
  )
}