const mongoose =require('mongoose');
const { Schema } = mongoose;

const MyusersSchema = new Schema({
  email:  String, 
  password: String,
  
  
});


const Myusers = mongoose.model('Myusers', MyusersSchema);

module.exports=Myusers;