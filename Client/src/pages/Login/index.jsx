import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./style.module.css";
import { BASE_URL } from "../../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    const obj = {
      email,
      password,
    };
    try {
      const response = await axios.post(`${BASE_URL}/userlogin`, obj);
      alert(response.data.message);
      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
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
                setPassword(e.target.value);
              }}
              helperText={
                <Link to={"/signup"}>
                  <Typography
                    textAlign={"right"}
                    color={"black"}
                    sx={{ cursor: "pointer" }}
                  >
                    Create an account
                  </Typography>
                </Link>
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
