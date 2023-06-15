"use client";

import SeachManufacturer from "./SeachManufacturer";

const handleSearch = () => {
  const handleSearch = () => {}
}

const SearchBar = () => {
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SeachManufacturer/>
      </div>
    </form>
  )
}

export default SearchBar