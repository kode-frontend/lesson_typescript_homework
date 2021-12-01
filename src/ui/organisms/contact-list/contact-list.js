import React from 'react'

import { Container } from '@src/ui/templates'
import { ContactItem } from '@src/ui/molecules'

export const ContactList = ({ contacts, onItemClick }) => {
  return (
    <Container>
      {contacts.map((contact) => <ContactItem contactInfo={contact} key={contact.id} onItemClick={onItemClick} /> )}
    </Container>
  )
}
