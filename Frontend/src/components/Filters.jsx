import React, { useState } from 'react';
import './Filte.css';
const FilterComponent = () => {
  const [filters, setFilters] = useState({
    country: '',
    cuisines: '',
    cost: '',
    options: {
      country: false,
      cuisines: false,
      cost: false,
    }
  });

  const handleSelectChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFilters({
      ...filters,
      options: { ...filters.options, [e.target.name]: e.target.checked }
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-item">
        <label>
          <input type="checkbox" name="country" checked={filters.options.country} onChange={handleCheckboxChange} />
          Country
        </label>
        <select name="country" value={filters.country} onChange={handleSelectChange} disabled={!filters.options.country}>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      <div className="filter-item">
        <label>
          <input type="checkbox" name="cuisines" checked={filters.options.cuisines} onChange={handleCheckboxChange} />
          Cuisines
        </label>
        <select name="cuisines" value={filters.cuisines} onChange={handleSelectChange} disabled={!filters.options.cuisines}>
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="French">French</option>
        </select>
      </div>

      <div className="filter-item">
        <label>
          <input type="checkbox" name="cost" checked={filters.options.cost} onChange={handleCheckboxChange} />
          Cost for 2 Persons
        </label>
        <select name="cost" value={filters.cost} onChange={handleSelectChange} disabled={!filters.options.cost}>
          <option value="">Select Cost</option>
          <option value="<$20">$20</option>
          <option value="$20-$50">$20-$50</option>
          <option value="$50-$100">$50-$100</option>
          <option value="$100-$200">$100-$200</option>
          <option value=">$200">$200</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
