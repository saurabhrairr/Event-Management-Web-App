const express = require("express");
const app = express();
const routers = express.Router();
const event = require("../model/eventschema");


routers.post("/eventdata",async (req, res) => {
  try {
    const { title, date,reminder } = req.body;
    const user = new event({title, date,reminder});

  await  user.save();
    res.status(200).send(user);
  } catch (e) {
       console.error(e);
       res.status(500).send({ error: "An error occurred while saving the user data." });
     }
});

routers.put("/eventdata/:id",async (req, res) => {
  try {
       const {id}=req.params
    const { title, date,reminder } = req.body;
    const user =await event.findByIdAndUpdate(
      id,
      { title: title, date: date,reminder: reminder},
      { new: true }
    );
   await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});


routers.delete("/eventdata/:id", async (req, res) => {
       try {
         const { id } = req.params;
         const eventdelete = await event.findByIdAndDelete(id);
     
         if (!eventdelete) {
           return res.status(404).send({ error: "Event not found." });
         }
     
         res.status(200).send({ message: "Event deleted successfully.", eventdelete });
       } catch (e) {
         console.error(e); // Log the error for debugging purposes
         res.status(500).send({ error: "An error occurred while deleting the event." });
       }
     });



     routers.get('/protected-route',  async (req, res) => {
      try {
          const user = await event.find();
          if (!user) {
              return res.status(404).json({ error: 'User not found' });
          }
         res.status(200).send(user)
      } catch (err) {
          res.status(500).json({ error: err.message });
      }
  });

module.exports = routers;
