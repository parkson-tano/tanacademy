import React from 'react'
import Signup from '../components/auth/Signup'
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
function SignUpPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          p: 5,
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <div className="mt-md-3">
            <Typography variant="h4" sx={{ m: 1 }} align="center">
              Register
            </Typography>
            <Signup />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignUpPage