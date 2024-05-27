const mongoose=require('mongoose');

const eventschema=new mongoose.Schema({


   title:{
       type:String,
   },
   date: { type: Date},
   reminder: {
    type: Boolean,
    required: true
  }

})

const eventdata=mongoose.model("event",eventschema);
module.exports=eventdata;