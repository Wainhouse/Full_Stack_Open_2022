import React from 'react'

export const Search = ({filterName, handleSearch}) => {
  return (
<p>Filter shown with : <input value={filterName} onChange={handleSearch} /></p>  )
}
