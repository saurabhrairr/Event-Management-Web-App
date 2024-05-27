import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputLabel, Input, FormHelperText, Button, TextField, Box, Typography } from '@mui/material';

function EventManagement() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState("");



       const handleInput = async (e) => {
              e.preventDefault();
              try {
                const response = await axios.post("http://localhost:8000/api/user/eventdata", {
                  title,
                  date,
                  reminder,
                });
              //   console.log(response.data);
                setTitle("")
                setDate("")
                setReminder("")
              } catch (e) {
                console.log(e);
            
              }
            };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#f5f5f5"
    >
      <Box 
        component="form" 
        onSubmit={handleInput}
        display="flex" 
        flexDirection="column" 
        maxWidth="400px" 
        width="100%" 
        bgcolor="white" 
        p={3} 
        borderRadius={2} 
        boxShadow={3}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Event Management
        </Typography>
        
        <FormControl margin="normal">
          <InputLabel htmlFor="title-input">Title</InputLabel>
          <Input 
            id="title-input" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            aria-describedby="title-helper-text" 
            required
          />
          <FormHelperText id="title-helper-text">Enter the event title.</FormHelperText>
        </FormControl>
        
        <TextField
          id="date-input"
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          required
        />

        <FormControl margin="normal">
          <InputLabel htmlFor="reminder-input">Reminder</InputLabel>
          <Input 
            id="reminder-input" 
            value={reminder} 
            onChange={(e) => setReminder(e.target.value === "true")} 
            aria-describedby="reminder-helper-text" 
            required
          />
          <FormHelperText id="reminder-helper-text">Set reminder (true/false).</FormHelperText>
        </FormControl>
        
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          onClick={handleInput}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default EventManagement;
