import React from 'react';
import './ChartBar.css';

const CharBar = props => {
  let barFillHeight = '0%';

  // This would give us the percantage between 0 and 100 by which the bar should be filled.
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default CharBar;
