const DgfRevolutionClientEnquiry = require("../models/DgfRevolutionClientEnquiry.model");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.addEnquiry = async (req, res) => {
  try {
    const {
      category,
      name,
      businessName,
      gst,
      number,
      email,
      country,
      address,
      cityDistrict,
      postcode,
      state,
      message,
    } = req.body;

    let newEnquiry = new DgfRevolutionClientEnquiry({
      category,
      name,
      businessName,
      gst,
      number,
      email,
      country,
      address,
      cityDistrict,
      postcode,
      state,
      message,
    });
    newEnquiry = await newEnquiry.save();
    let token = jwt.sign({ id: newEnquiry._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    newEnquiry = { ...newEnquiry._doc, token: token };
    return res.status(201).json({
      errorcode: 0,
      status: true,
      message: "Revolution Client enquiry added successfully",
      data: newEnquiry,
    });
  } catch (error) {
    return res.status(204).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};

exports.getRevolutionClientEnquiry = async (req, res) => {
  try {
    let revolutionClientEnquiry = await DgfRevolutionClientEnquiry.find(
      {}
    ).sort({ created_ts: -1 });
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "Get all Revolution Enquiry Comments successfully",
      data: revolutionClientEnquiry,
    });
  } catch (error) {
    return res.status(204).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    // const { id } = req.params;
    // let userDetail = await DgfRevolutionClientEnquiry.findById({
    //   _id: id,
    // }).populate([
    //   {
    //     path: "_id",
    //     model: "DgfRevolutionClientEnquiry",
    //     select:
    //       "category name businessName number email country address cityDistrict postcode state message ",
    //   },
    // ]);
    // if (!userDetail)
    //   return res.status(404).json({
    //     errorcode: 2,
    //     status: true,
    //     message: "User not found",
    //     data: null,
    //   });
    // return res.status(200).json({
    //   errorcode: 0,
    //   status: true,
    //   message: "User Detail found",
    //   data: userDetail,
    // });

    let { userId } = req.body;
    let user = await DgfRevolutionClientEnquiry.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(userId),
        },
      },
    ]);

    console.log("userId", req.body);

    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "User Detail found",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(204).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};
