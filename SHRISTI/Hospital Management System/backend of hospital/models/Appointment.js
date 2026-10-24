import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, default: 'Scheduled' }
  },
  { timestamps: true }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;