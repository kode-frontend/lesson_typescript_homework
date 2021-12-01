import React from 'react'

import { SortButton } from '@src/ui/molecules'
import { IconSearch } from '@src/ui/atoms'

import searchBarStyles from './search-bar.module.css'

export const SearchBar = ({ onChange }) => {

  const onChangeHandler = (e) => {
    onChange(e.target.value.toLowerCase())
  }

  return (
    <div className={searchBarStyles['search-bar-wrapper']}>
      <IconSearch />
      <input
        type='text'
        placeholder='Введи имя, тег, почту...'
        className={searchBarStyles['search-bar-input']}
        onChange={onChangeHandler}
        />
      <SortButton />
    </div>
  )
}
