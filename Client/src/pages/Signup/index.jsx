import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./style.module.css";
import RowRadioButtonsGroup from "../../components/radioBtn";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";

const Signup = () => {
  const [name, setName] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    console.log(name, email, pass);
    if (!name || !pNumber || !gender || !email || !pass) {
      alert("Please fill all the fields");
      return;
    }
    const obj = {
      fullName: name,
      phoneNumber: pNumber,
      gender: gender,
      email: email,
      password: pass,
    };
    console.log("Function", obj);
    try {
      const response = await axios.post(`${BASE_URL}/userSingup`, obj);
      alert(response.data.message);
      console.log();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Box className={styles.loginWrapper}>
        <Box className={styles.loginForm}>
          <h2>SIGNUP</h2>
          <Divider />
          <Box onSubmit={loginHandler} component={"form"}>
            <TextField
              id="outlined-basic"
              label="Enter your Name"
              variant="outlined"
              fullWidth
              sx={{ mt: "40px" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              id="outlined-basic"
              label="Enter Phone Number"
              variant="outlined"
              fullWidth
              sx={{ mt: "20px" }}
              onChange={(e) => {
                setPNumber(e.target.value);
              }}
            />
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ mt: "20px" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Enter your Email"
              variant="outlined"
              fullWidth
              sx={{ mt: "20px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <RowRadioButtonsGroup /> */}
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
                <Link to={"/"}>
                  <Typography
                    textAlign={"right"}
                    color={"black"}
                    sx={{ cursor: "pointer" }}
                  >
                    Already have an account?
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
              Signup
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
