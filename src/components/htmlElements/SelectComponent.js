import React from "react";
import PropTypes from "prop-types";

function SelectComponent({
  name,
  label,
  onChange,
  caption,
  value,
  error,
  options
}) {
  caption = caption ? caption : "-Please select one-";
  return (
    <div className="form-group">
      <div className="col-md-6 mb-3">
        <label htmlFor={name}>{label}</label>
        <select
          onChange={onChange}
          className="form-control"
          id={name}
          value={value}
        >
          <option key={-1} value="">
            {caption}
          </option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
}

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  caption: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectComponent;
