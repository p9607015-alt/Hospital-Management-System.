import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    disease: { type: String, required: true },
    doctorAssigned: { type: String, default: 'Unassigned' },
    status: { type: String, enum: ['Admitted', 'Discharged'], default: 'Admitted' }
  },
  { timestamps: true }
);

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;