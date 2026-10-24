import mongoose from 'mongoose';

const billingSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' }
  },
  { timestamps: true }
);

const Billing = mongoose.model('Billing', billingSchema);
export default Billing;