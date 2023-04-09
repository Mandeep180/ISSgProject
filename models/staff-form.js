/** Add staff-form
 * 
 */

 const mongoose = require('mongoose');

// Define the schema for the form data
const formSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  studentEmail: { type: String, required: true },
  staffName: { type: String, required: true },
  organizeType: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  appointmentNotes: { type: String },
},
{collection:"staff-form"});

// Create a model for the form data using the schema
const StaffForm = mongoose.model('staffForm', formSchema);


module.exports = StaffForm;