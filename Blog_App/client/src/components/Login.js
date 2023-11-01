import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/Login.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/Store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // state
  const [inputs, setInputs] = useState({
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
      const { data } = await axios.post("/api/v1/login", {
        email: inputs.email,
        password: inputs.password,
      });
      toast.success("User seccessfully login", {
        position: "top-center",
        autoClose: 2000,
      });

      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        // alert("User seccessfully login");

        dispatch(authActions.login());
        navigate("/");
      }
    } catch (error) {
      toast.error("email or password incorrect", {
        position: "top-center",
        autoClose: 1000,
      });
      // alert("email or password incorrect");
    }
  };
  return (
    <>
      <ToastContainer />
      <h3 className="logintitle">LOGIN HERE</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="login">
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
            autoComplete="current-password"
            required
          />
        </div>
        <div className="submitlogin">
          <Button type="submit" variant="contained">
            SUBMIT
          </Button>
        </div>
      </form>
      <div className="goregister">
        <Link className="goregister" to="/register">
          Not registered ? please register
        </Link>
      </div>
    </>
  );
};

export default Login;
