import React from 'react';
import './filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text"  id="city" name="city" placeholder='city'/>
        </div>
      </div>
      <div className="bottom">
      <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text"  id="city" name="city" placeholder='city'/>
        </div>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text"  id="city" name="city" placeholder='city'/>
        </div>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text"  id="city" name="city" placeholder='city'/>
        </div>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text"  id="city" name="city" placeholder='city'/>
        </div>
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
