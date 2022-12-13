import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const formData1 = {
  name: "Mayank",
  age: 8,
};

export default function MuiForm() {
  const [formData, setFormData] = useState({
    name: "Mayank",
    age: 8,
  });

  const handleSubmitSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Box sx={{ textAlign: "center", mt: 14 }}>
      <form onSubmit={handleSubmitSubmit}>
        <TextField
          sx={{ width: "200px", margin: "5px" }}
          type="text"
          label="First Name"
          variant="outlined"
          name="name"
          value={formData.name}
          // data-testid must be provided inside the inputProps
          // or else the data-testid will not be received while
          // testing through JEST/Rect Testing Lib
          inputProps={{ "data-testid": "firstName1" }}
          onChange={handleChange}
        />
        <br />
        <TextField
          sx={{ width: "200px", margin: "5px" }}
          type="number"
          label="Age"
          variant="outlined"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <Button type={"submit"} variant="contained" color="primary">
          Submit Form
        </Button>
      </form>
    </Box>
  );
}