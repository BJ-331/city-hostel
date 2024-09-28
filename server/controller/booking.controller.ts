import { Request, Response, NextFunction } from "express";
import { DeleteEntity, UpdateEntity } from "../crud-operation/common-crud";
import { Booking, RoomModel } from "../model";
import CustomError from "../middleware/CusomError";
import { DataFoundMessage } from "../const";
import {
  BookingAccepted,
  BookingNotification,
  BookingRejected,
  sendMail,
} from "../utils";

export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const saveData = new Booking(data);
    await saveData.save();

    const body = BookingNotification(
      data.ownerEmail,
      data.user.userName,
      data.room.imgUrl,
      data.user.email,
      data.user.contact,
      data.user.address,
      data.people,
      data.room.hostelName,
      data.room.location,
      data.room.peopleNumber,
      data.room.price
    );

    await sendMail(data.ownerEmail, "Booking Reservation", body);
    return DataFoundMessage(res, saveData, "Entity created successfully!!!");
  } catch (error) {
    return CustomError.tryCatchError(next);
  }
};

export const updateBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  if (req.body.data.status === "cancelled") {
    const rejectedEmail = BookingRejected(
      req.body.data.user.userName,
      req.body.data.room.hostelName,
      req.body.data.user.email,
      req.body.data.user.contact,
      req.body.data.room.email,
      req.body.data.room.location,
      req.body.data.room.contact
    );
    await sendMail(req.body.data.user.email, "Booking Update", rejectedEmail);
  }

  if (req.body.data.status === "confirmed") {
    const accpetedEmail = BookingAccepted(
      req.body.data.user.userName,
      req.body.data.room.hostelName,
      req.body.data.user.email,
      req.body.data.user.contact,
      req.body.data.room.email,
      req.body.data.room.location,
      req.body.data.room.contact
    );
    await sendMail(req.body.data.user.email, "Booking Update", accpetedEmail);
    const remainingSeat =
      req.body.data.room.peopleNumber - req.body.data.people;

    const toUpdateData = {
      ...req.body.data.room,
      availableSeat: remainingSeat,
    };

    await RoomModel.findByIdAndUpdate(req.body.data.room._id, toUpdateData);
  }

  UpdateEntity(req, res, next, Booking, () => {
    return req.body.data;
  });
};

export const getAllBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookingDetails = await Booking.find()
      .populate("user")
      .populate("room");

    if (!bookingDetails) return CustomError.searchEntityMissingError(next);

    return DataFoundMessage(res, bookingDetails);
  } catch (error) {
    next(error);
  }
};

export const getBookingByRoomId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookingDetails = await Booking.find({ room: req.params.id })
      .populate("user")
      .populate("room");

    if (!bookingDetails) return CustomError.searchEntityMissingError(next);

    return DataFoundMessage(res, bookingDetails);
  } catch (error) {
    next(error);
  }
};

export const getBookingByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookingDetails = await Booking.find({ user: req.params.id })
      .populate("user")
      .populate("room");

    if (!bookingDetails) return CustomError.searchEntityMissingError(next);

    return DataFoundMessage(res, bookingDetails);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  DeleteEntity(req, res, next, Booking);
};
