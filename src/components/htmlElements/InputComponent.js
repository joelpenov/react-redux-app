import React from "react";
import PropTypes from "prop-types";

function InputComponent({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  inputType = "text"
}) {
  let inputClasses = "form-control ";
  inputClasses = error ? inputClasses + " is-invalid" : inputClasses;
  return (
    <div className="form-group">
      <div className="col-md-6 mb-3">
        <label htmlFor={name}>{label}</label>
        <input
          type={inputType}
          className={inputClasses}
          id={name}
          name={name}
          placeholder={placeholder}
          required
          onChange={onChange}
          value={value}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
}

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  inputType: PropTypes.string
};

export default InputComponent;
