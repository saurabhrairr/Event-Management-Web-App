import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, InputLabel, Input, FormHelperText, Button, TextField, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Swal from 'sweetalert2';

function EventManagement() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState("");
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(false);



  const handleInput = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/user/eventdata", {
        title,
        date,
        reminder,
      });
      // Clear the form fields
      setTitle("");
      setDate("");
      setReminder("");
      Swal.fire({
        icon: 'success',
        title: 'Event added successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      fetchEvents(); // Fetch the updated list of events
      setShowEvents(true); // Show the events list
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };




  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user/eventdataget");
      setEvents(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);



  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#f5f5f5"
      flexDirection="column"
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
        justifyContent="space-between" // Ensure spacing between elements
        mb={3}
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
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>

      {showEvents && (
        <Box 
          width="100%" 
          maxWidth="400px"
          bgcolor="white" 
          p={3} 
          borderRadius={2} 
          boxShadow={3}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Event List
          </Typography>
          <List>
            {events.map((event) => (
              <ListItem key={event.id}>
                <ListItemText 
                  primary={event.title} 
                  secondary={`Date: ${event.date} | Reminder: ${event.reminder ? 'Yes' : 'No'}`} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default EventManagement;
