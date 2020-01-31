import mongoose from "mongoose";
import validator from "validator";

const Patient = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a valid first name"]
    },

    lastName: {
      type: String,
      required: [true, "Please enter a valid last name"]
    },

    phoneNumber: String, // should it be required ?

    email: {
      type: String,
      lowercase: true,
      unique: true,
      validate: value => {
        if (!validator.isEmail(value))
          throw new Error({ error: "Invalid Email adress" });
      }
    },
 
    password: { type: String, required: true }, 
    
    adress: String, //should be revised

    image: String, //should be revised

    birthDate: String,

    gender: String, //we can add a validator here

    medicalRecord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalRecord"
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor"
    } // should we have this
  },
  { timestamps: true }
);

export default mongoose.model("Patient", Patient);
