
import CreateHall from "../models/createHall.model.js";
import BookingHall from "../models/bookingHall.model.js";

//Creating a hall
export const createHall = async (req, res) => {
  const { noSeats, roomAmenities, pricePerHour } = req.body;

  try {
    await CreateHall.create({
      noSeats,
      roomAmenities,
      pricePerHour,
    });
    res.status(200).json("Created Successfully");
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//Booking a hall
export const hallBooking = async (req, res) => {
  const { roomNo, custName, date, startTime, endTime } = req.body;

  try {
    await BookingHall.create({
      roomNo,
      custName,
      date,
      startTime,
      endTime,
    });
    res.status(200).json("Booked Successfully");
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//List all hall with booked date
export const hallList = async (req, res) => {
  const { date } = req.body;
  try {
    const BookedList = await BookingHall.findOne({ date });
    res.status(200).json({ BookedList });
  } catch (error) {
    res.status(500).json(error)
  }
};

//List all customers with booked date
export const customersList = async (req, res) => {
  const { date } = req.body;
  try {
    const BookedList = await BookingHall.findOne({ date });
    res.status(200).json({ BookedList });
  } catch (error) {
    res.status(500).json(error);
  }
};