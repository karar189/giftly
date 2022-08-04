import React from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Box, TextField } from "@mui/material";

export default function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "24ch" },
        }}
      >
        <TextField id="filled-basic" label="Name" variant="filled" />
        <TextField id="filled-basic" label="Surname" variant="filled" />
        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField
          id="filled-basic"
          label="Phone Number"
          type="number"
          variant="filled"
        />
      </Box>
      <Box sx={{ m: 1, width: "50ch" }}>
        <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={5}
          variant="filled"
          fullWidth
        />
      </Box>
      <Box sx={{ m: 1, mt: 2 }}>
        <Button variant="outlined">Submit</Button>
      </Box>
    </Container>
  );
}
