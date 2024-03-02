import mongoose from "mongoose";
const Schema = mongoose.Schema;

const createHallSchema = new Schema({
  noSeats: { type: Number, required: true },
  roomAmenities: { type: [String], required: true },
  pricePerHour: { type: Number, required: true },
});

export default mongoose.model("CreateHall", createHallSchema);
