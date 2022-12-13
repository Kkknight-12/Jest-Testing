import React, { useState } from "react";
import "../form.css";

const Form = ({ name }) => {
  const [fullName, setFullName] = useState(name);
  const [age, setAge] = useState();

  const onChange = (e) => {
    if (e.target.name == "Fullname") setFullName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    console.log("SUbmitted");
  };

  return (
    <div className="formContainer">
      // heading
      <h1 data-testid="headingIns-id"> Total Items: {name}</h1>
      // form
      <form onSubmit={onSubmit}>
        <div className="InputContainer">
          Full Name
          <input
            className="inputDiv"
            data-testid="fullName"
            name="Fullname"
            onChange={onChange}
            value={fullName}
            placeholder="Enter Full Name"
          />
        </div>

        <div className="InputContainer">
          <label htmlFor="A">Option A</label>
          <input
            type="checkbox"
            id="A"
            name="A"
            value="A"
            data-testid="checkbox-A"
          />
        </div>

        <div className="InputContainer">
          Age
          <input
            className="inputDiv"
            name="Age"
            type="Number"
            value={age}
            onChange={onChange}
          />
        </div>

        <button data-testid="Submit-button" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
};
export default Form;