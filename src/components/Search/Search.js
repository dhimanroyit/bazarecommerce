import React from "react";

const Search = () => {
  return (
    <div className="search">
      <form action="" className="search__form">
        <div className="search__inputGroup">
          <input type="text" className="search__input"/>
        </div>
        <button className="search__btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}

export default Search;