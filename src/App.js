import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAdvice } from "./features/Data";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import pattern from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";
import "./App.css";

const App = () => {
  useSelector((state) => state.advice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdvice());
  }, [dispatch]);
  const data = useSelector((state) => state?.data?.data?.data?.slip);

  const reload = () => {
    window.location.reload(true);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "rgba(13, 12, 14, 0.95)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          width: { sm: "550px", xs: "100%" },
          height: "300px",
          borderRadius: "10px",
          backgroundColor: "#323a49",
        }}
      >
        {data?.id && (
          <Typography variant="p" color={"#52ffa8"}>
            ADVICE #{data.id}
          </Typography>
        )}

        <Typography
          variant="h5"
          color={"white"}
          fontWeight={800}
          textAlign="center"
        >
          {data?.advice}
        </Typography>
        <img
          style={{ width: "100%", translate: "0px 40px" }}
          src={pattern}
          alt="pattern"
        />
        <button
          onClick={reload}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#52ffa8",
            border: "none",
            translate: "0px 60px",
          }}
        >
          <img src={dice} alt="dice" />
        </button>
      </Box>
    </Container>
  );
};

export default App;
