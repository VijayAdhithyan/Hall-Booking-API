import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingHallSchema = new Schema({
  roomNo: { type: Number, required: true },
  custName: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

export default mongoose.model("BookingHall", bookingHallSchema);
