import React from 'react'

import contactItemStyles from './contact-item.module.css'

import { ContactPic } from '@src/ui/atoms'
import { TextPrimary, TextSecondary, TextSmall } from '@src/ui/typography'

export const ContactItem = ({ contactInfo, onItemClick }) => {
  return (
    <div className={contactItemStyles.wrapper} onClick={() => onItemClick(contactInfo.id)}>
      <ContactPic avatarUrl={contactInfo.avatarUrl} />
      <div className={contactItemStyles['caption-wrapper']}>
        <div className={contactItemStyles['heading-wrapper']}>
          <TextPrimary>{contactInfo.firstName} {contactInfo.lastName}</TextPrimary>
          <div style={{ width: 8 }} />
          <TextSecondary>{contactInfo.userTag.toLowerCase()}</TextSecondary>
        </div>
        <TextSmall>{contactInfo.position}</TextSmall>
      </div>
    </div>
  )
}
