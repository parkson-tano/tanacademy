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


import React, {useState} from 'react'


function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
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

  const handleSubmit = (event) => {
    console.log({credentials})
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={credentials.email}
          onChange={handleChange("email")}
          label="Amount"
          required = {true}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={credentials.showPassword ? "text" : "password"}
          value={credentials.password}
          onChange={handleChange("password")}
          required = {true}
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
      <Typography align="right" color="primary">
        <Link to="/auth/forgorpassword">Forgot Password?</Link>
      </Typography>
      <Button
        variant="contained"
        color="success"
        size="large"
        fullWidth
        sx={{ m: 1 }}
        type="submit"
      >
        Login
      </Button>
      <Typography align="left" color="primary" sx={{ m: 1 }}>
        <Link to="/auth/signup">Create Account</Link>
      </Typography>
    </form>
  );
}

export default Login