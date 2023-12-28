import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserAuth = () => {
  const [isSignup, setIsSignup] = useState(false);
  let navigate=useNavigate()

  const handleToggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
        height: "100vh",
      }}
    >
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ width: "500px", padding: "20px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {isSignup ? "Register Here" : "Login Here"}
          </Typography>
          <form>
            {isSignup ? (
              <>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </>
            ) : (
              <>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="email"
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type="password"
                />
                <Typography variant="body2" sx={{ textAlign: "right" }}>
                  <Link href="#" color="primary">
                    Forgot Password?
                  </Link>
                </Typography>
              </>
            )}

           <Link to='/home'>
           <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ padding: "10px", borderRadius: "10px", marginTop: "10px" }}
            >
              {isSignup ? "Signup" : "Login"}
            </Button>
           </Link>
          </form>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={handleToggleForm}
            >
              {isSignup ? "Login" : "Signup"}
            </span>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserAuth;