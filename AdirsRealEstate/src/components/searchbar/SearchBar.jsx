import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import "./searchbar.scss"

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  // const [isBuyButtonActive, setIsBuyButtonActive] = useState(true)
  // const [isRentButtonActive, setIsRentButtonActive] = useState(true)

  
  return (
    <div className="searchBar">
      <div className="type">
        <button
          onClick={() => setQuery({ ...query, type: 'buy' })}
          className={query.type === 'buy' ? 'active' : ''}
        >
          Buy
        </button>
        <button
          onClick={() => setQuery({ ...query, type: 'rent' })}
          className={query.type === 'rent' ? 'active' : ''}
        >
          Rent
        </button>
      </div>
      <form action="">
        <input type="text" name="location" placeholder="city-location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={1000}
          max={10000000}
          placeholder="max price"
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
