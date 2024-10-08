import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './CheckboxGroup.css';

const CheckboxGroup = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    base: false,
    stacked1: false,
    stacked2: false,
    stacked3: false,
    inline1: false,
    inline2: false,
    inline3: false,
    checkedPartial: true,
  });

  const handleCheckboxChange = (key) => {
    setCheckboxStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="checkbox-group">
      <div className="top-section">
        <div className="column">
          <h3>Base Checkbox</h3>
          <Checkbox
            label="Checkbox 1"
            checked={checkboxStates.base}
            onChange={() => handleCheckboxChange('base')}
          />
        </div>

        <div className="column">
          <h3>Stacked Checkboxes</h3>
          <Checkbox
            label="Checkbox 1"
            checked={checkboxStates.stacked1}
            onChange={() => handleCheckboxChange('stacked1')}
          />
          <Checkbox
            label="Checkbox 2"
            checked={checkboxStates.stacked2}
            onChange={() => handleCheckboxChange('stacked2')}
          />
          <Checkbox
            label="Checkbox 3"
            checked={checkboxStates.stacked3}
            onChange={() => handleCheckboxChange('stacked3')}
          />
        </div>

        <div className="column">
          <h3>Inline Checkboxes</h3>
          <div className="inline-group">
            <Checkbox
              label="Checkbox 1"
              inline
              checked={checkboxStates.inline1}
              onChange={() => handleCheckboxChange('inline1')}
            />
            <Checkbox
              label="Checkbox 2"
              inline
              checked={checkboxStates.inline2}
              onChange={() => handleCheckboxChange('inline2')}
            />
            <Checkbox
              label="Checkbox 3"
              inline
              checked={checkboxStates.inline3}
              onChange={() => handleCheckboxChange('inline3')}
            />
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="checkbox-label-group">
          <span className="checkbox-label">Checked Disabled</span>
          <Checkbox label="text_primary" checked />
        </div>

        <div className="checkbox-label-group">
          <span className="checkbox-label">Checked Disabled</span>
          <Checkbox label="Checkbox 1" checked disabled />
        </div>

        <div className="checkbox-label-group">
          <span className="checkbox-label">Checkbox Disabled</span>
          <Checkbox label="Checkbox 1" disabled />
        </div>

        <div className="checkbox-label-group">
          <span className="checkbox-label">Checked partial</span>
          <Checkbox
            label="Checkbox 1"
            checked={checkboxStates.checkedPartial}
            partial
            onChange={() => handleCheckboxChange('checkedPartial')}
          />
        </div>

        <div className="checkbox-label-group">
          <span className="checkbox-label">Checked partial Disabled</span>
          <Checkbox label="Checkbox 1" checked partial disabled />
        </div>
      </div>
    </div>
  );
};

export default CheckboxGroup;
