import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        name="query"
        className="form-control"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
