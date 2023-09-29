const mongoose = require('mongoose');

const prasadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    prasadQuantity: {
      type: String,
      required: true,
    },
    prasadAmount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PrasadModel = mongoose.model('PrasadModel', prasadSchema);

module.exports = PrasadModel;
