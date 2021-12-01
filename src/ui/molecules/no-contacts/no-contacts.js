import React from 'react'

import noContactsStyles from './no-contacts.module.css'
import pic from './flying-saucer.png'

export const NoContacts = ({ onRetry }) => {
  return (
    <div className={noContactsStyles.wrapper}>
      <img src={pic} alt="no-data" className={noContactsStyles.img} width={56} height={56} />
      <p className={noContactsStyles.title}>Какой-то сверхразум все сломал</p>
      <p className={noContactsStyles.caption}>Постараемся быстро починить</p>
      <p className={noContactsStyles.link} onClick={() => onRetry()}>Попробовать снова</p>
    </div>
  )
}
