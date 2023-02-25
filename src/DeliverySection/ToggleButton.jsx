import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
  const [toggled, setToggled] = useState(false);

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={toggled} onChange={() => setToggled(!toggled)} />
      <span className="toggle-slider"></span>
    </label>
  );
}

export default ToggleButton;
