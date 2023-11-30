import React, { useState } from 'react'
import { Searchbar } from '../components/Searchbar'
import { arrayInput } from '..'


function Autocomplete() {
  return (
    <Searchbar dropDownList={arrayInput} />
  )
}

export default Autocomplete