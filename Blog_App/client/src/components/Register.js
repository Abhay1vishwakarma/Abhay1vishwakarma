import React from "react";
import "../style/Register.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  // state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  // handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        alert("User seccessfully registered");
        navigate("/login");
      }
    } catch (error) {}
  };

  return (
    <>
      <h3 className="registertitle">REGISTER HERE</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="register">
          <TextField
            className="input"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            helperText=" "
            type="text"
            id="demo-helper-text-aligned-no-helper"
            label=" Enter Name"
            required
          />
          <TextField
            className="input"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            helperText=" "
            type="email"
            id="demo-helper-text-aligned-no-helper"
            label=" Enter Email"
            required
          />
          <TextField
            className="input"
            value={inputs.password}
            onChange={handleChange}
            id="outlined-password-input"
            name="password"
            label="Password"
            type="password"
            required
            autoComplete="current-password"
          />
        </div>
        <div className="submitregister">
          <Button type="submit" variant="contained">
            SUBMIT
          </Button>
        </div>
      </form>
      <div className="gologin">
        <Link className="gologin" to="/login">
          Already registered ? please login
        </Link>
      </div>
    </>
  );
};

export default Register;
