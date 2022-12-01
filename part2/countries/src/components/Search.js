import React from 'react'

export const Search = ({filterName, handleSearch}) => {
  return (
<p>
    Find Countries: <input value={filterName} onChange={handleSearch} />
</p>  )
}