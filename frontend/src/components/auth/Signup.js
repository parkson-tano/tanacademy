import React, { useState } from 'react'
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


function Signup() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
    first_name: "",
    last_name : "",
  });

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
  return (
    <div>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
        <OutlinedInput
          id="outlined-adornment-username"
          value={credentials.username}
          onChange={handleChange("username")}
          label="Username"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          value={credentials.email}
          onChange={handleChange("email")}
          label="Email"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-first_name">First Name</InputLabel>
        <OutlinedInput
          id="outlined-adornment-frist_name"
          value={credentials.first_name}
          onChange={handleChange("first_name")}
          label="First Name"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-last_name">Last Name</InputLabel>
        <OutlinedInput
          id="outlined-adornment-last_name"
          value={credentials.last_name}
          onChange={handleChange("last_name")}
          label="Last Name"
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
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password2">Confirm Password</InputLabel>
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
        />
      </FormControl>
      <Button
        variant="contained"
        color="success"
        size="large"
        fullWidth
        sx={{ m: 1 }}
      >
        Login
      </Button>
      <Typography align="left" color="primary" sx={{ m: 1 }}>
        <Link to="/auth/login">Already Has an Account ?</Link>
      </Typography>
    </div>
  );
}

export default Signup