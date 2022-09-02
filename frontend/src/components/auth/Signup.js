import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TrendingUpRounded } from '@material-ui/icons';
import axios from 'axios';

function Signup() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    password2: "",
    phone_number: "",
    first_name: "",
    last_name : "",
  });
  const [confirm, setConfirm] = ("1")
  const BaseURL = "https://tano.pythonanywhere.com/auth/register/"
  const handleChange = (prop) => (event) => {
    setCredentials({ ...credentials, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setCredentials({
      ...credentials,
      showPassword: !credentials.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    console.log({ credentials });
    event.preventDefault();
  };

    console.log("password:" + credentials.password)
     console.log("password2:" + credentials.password2)
     const pass = (credentials.password === credentials.password2)
     const check =  (credentials.password.length >= 8)
     console.log(pass)

  const create_user = (event) => {
    event.preventDefault();
    axios
      .post(BaseURL, {
        email: credentials.email,
        password: credentials.password,
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        phone_number: credentials.phone_number,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={create_user}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          value={credentials.email}
          onChange={handleChange("email")}
          label="Email"
          required={true}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-first_name">
          First Name
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-frist_name"
          value={credentials.first_name}
          onChange={handleChange("first_name")}
          label="First Name"
          required={true}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-last_name">
          Last Name
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-last_name"
          value={credentials.last_name}
          onChange={handleChange("last_name")}
          label="Last Name"
          required={true}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-phone_number">
          Phone Number
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-phone_number"
          value={credentials.phone_number}
          onChange={handleChange("phone_number")}
          label="Username"
          required={true}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={credentials.showPassword ? "text" : "password"}
          value={credentials.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {credentials.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          required={true}
        />
        {!check ? (
          <FormHelperText error={true} variant="outlined">
            Password is too Short
          </FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password2">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password2"
          type={credentials.showPassword ? "text" : "password"}
          value={credentials.password2}
          onChange={handleChange("password2")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {credentials.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
          required={true}
        />
        {!pass ? (
          <FormHelperText error={true} variant="outlined">
            Password don't match
          </FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
      <Button
        variant="contained"
        color="success"
        size="large"
        fullWidth
        sx={{ m: 1 }}
        type="submit"
        disabled={pass && check ? false : true}
      >
        Register
      </Button>
      <Typography align="left" color="primary" sx={{ m: 1 }}>
        <Link to="/auth/login">Already Has an Account ?</Link>
      </Typography>
    </form>
  );
}

export default Signup