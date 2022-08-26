import { Typography } from '@mui/material'
import React from 'react'
import Login from '../components/auth/Login'
import Box from "@mui/material/Box";
function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        p: 5,
        alignItems: "center",
      }}
    >
      <div className="mt-md-3 p-md-5">
        <Typography variant='h4' sx={{ m: 1 }} align='center'>Login</Typography>
        <Login />
      </div>
    </Box>
  );
}

export default LoginPage