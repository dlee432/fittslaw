import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

function HomePage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("test", { state: { promptValue: prompt } });
  };
  const [prompt, setPrompt] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setPrompt(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ marginTop: "5rem", marginBottom: "4rem" }}>
        Fitts' Law in Life
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography>
            <span style={{ fontSize: "1.5rem", fontWeight: 800 }}>Hello! </span>
            Our app is designed for users to learn and practice <span style={{ fontWeight:"bold" }}>Fitts’ Law </span> in
            two different ways:
          </Typography>
          <ul>
            <li>
              <Typography>By receiving <span style={{ fontWeight:"bold" }}>theory-based </span> prompts</Typography>
            </li>
            <li style={{ marginTop: "0.5rem" }}>
              <Typography>By receiving <span style={{ fontWeight:"bold" }}>context-based </span> prompts</Typography>
            </li>
          </ul>
          <Typography>
            In order to find out which method works better, you will be able to
            try out both methods using our app.
          </Typography>
          <br />
          <Typography fontSize="1rem" fontWeight={600}>
            Here are the instructions:
          </Typography>
          <Typography>
            <ol>
              <li>Press the start button.</li>
              <li>
                Adjust the <span style={{ fontWeight:"bold" }}>width, height, and spacing </span> between the buttons
                appropriately using the sliders on the left.
              </li>
              <li>
                When you think the buttons look good, press the <span style={{ fontWeight:"bold" }}>“START TEST” </span>
                button to test how well you have designed the buttons.
              </li>
              <li>
                Follow the test instructions. Make sure you click the buttons in
                order.
              </li>
              <li>
                Please remember that you <span style={{ fontWeight:"bold" }}>cannot adjust </span> the button properties
                such as width and height <span style={{ fontWeight:"bold" }}>after starting </span> the test.
              </li>
              <li>Repeat all the steps until you complete all 3 scenarios.</li>
            </ol>
          </Typography>
          <Typography>
            <br />
            You will go through 3 scenarios and have 3 attempts for each. So in
            total, you will go through
            <span style={{ fontWeight: 700 }}> 9</span> attempts.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginX: "4vw",
            paddingX: "3rem",
            borderLeft: "1px solid #ccc",
          }}
        >
          <Typography variant="h3" marginBottom="1rem">
            Select type of prompt
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="">Type of Prompt</InputLabel>
            <Select
              labelId="prompt-label"
              id="prompt-select"
              value={prompt}
              label="Type of Prompt"
              onChange={handleChange}
            >
              <MenuItem value={1}>Context-based</MenuItem>
              <MenuItem value={2}>Theory-based</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              marginTop: "4rem",
              fontSize: "1rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              borderRadius: "10rem",
            }}
            onClick={handleNavigate}
          >
            Start
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
