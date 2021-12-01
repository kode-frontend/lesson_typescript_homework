import React from 'react'

import contactPicStyle from './contact-pic.module.css'

export const ContactPic = ({ avatarUrl }) => {
  return (
    <div className={contactPicStyle['contact-pic-wrapper']}>
      <img src={avatarUrl} alt='contact' className={contactPicStyle.img} />
    </div>
  )
}
