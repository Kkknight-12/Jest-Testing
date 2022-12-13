import React from "react";

export const NumberDisplay = ({ number }) => {
  return (
    <div>
      <span data-testid="number-display">{number}</span>
    </div>
  );
};