import React, { useState } from "react";

// ------------------------------------------------------------------------------------

function SummaryForm(props) {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = <span>I agree to Terms and Conditions</span>;

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={tcChecked}
        value=""
        id="flexCheckDefault"
        onChange={(e) => setTcChecked(e.target.checked)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {checkboxLabel}
      </label>
      <button type="button" className="btn btn-primary" disabled={!tcChecked}>
        Confirm order
      </button>
    </div>
  );
}

export default SummaryForm;