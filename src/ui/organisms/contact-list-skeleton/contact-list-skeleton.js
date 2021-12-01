import React from 'react'

import { Container } from '@src/ui/templates'
import { ContactItemSkeleton } from '@src/ui/molecules'

export const ContactListSkeleton = ({ amount = 6 }) => {
  const list = new Array(amount).fill()

  return (
    <Container>
      {list.map((_, index) => <ContactItemSkeleton key={index} />)}
    </Container>
  )
}
