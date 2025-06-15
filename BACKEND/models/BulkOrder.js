import mongoose from 'mongoose';

const bulkOrderSchema = new mongoose.Schema({
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  workingHours: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("BulkOrderContact", bulkOrderSchema);
