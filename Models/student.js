const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    roll_number: String,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    course:String       
    
});

  module.exports = mongoose.model('Student', studentSchema);