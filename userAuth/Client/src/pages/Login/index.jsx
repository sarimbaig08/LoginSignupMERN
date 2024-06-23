import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./style.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const loginHandler = (event) => {
    event.preventDefault();
    if (!email || !pass) {
      alert("Please fill all the fields");
      return;
    }
    console.log("Function");
  };
  return (
    <>
      <Box className={styles.loginWrapper}>
        <Box className={styles.loginForm}>
          <h2>LOGIN</h2>
          <Divider />
          <Box onSubmit={loginHandler} component={"form"}>
            <TextField
              id="outlined-basic"
              label="Enter your Email"
              variant="outlined"
              fullWidth
              sx={{ mt: "40px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter your Password"
              variant="outlined"
              fullWidth
              sx={{ mt: "20px" }}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              helperText={
                <Typography
                  textAlign={"right"}
                  color={"red"}
                  sx={{ cursor: "pointer" }}
                >
                  Forget password
                </Typography>
              }
            />
            <Button
              startIcon={<LoginIcon />}
              variant="contained"
              color="inherit"
              fullWidth
              sx={{ mt: "40px" }}
              type="submit"
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
