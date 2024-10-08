import React from 'react';
import './Checkbox.css';

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  partial = false,
  onChange,
  inline = false,
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const getIconSrc = () => {
    if (partial) return '/ic_checkbox_half.svg';
    if (checked) return '/ic_checkbox_checked.svg';
    return '/ic_checkbox_unchecked.svg';
  };

  return (
    <div
      className={`checkbox ${inline ? 'inline' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
    >
      <img src={getIconSrc()} alt="checkbox" className="checkbox-icon" />
      <span className={`checkbox-label ${disabled ? 'text-disabled' : ''}`}>{label}</span>
    </div>
  );
};

export default Checkbox;
