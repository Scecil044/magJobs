import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    website: {
      type: String,
      unique: true
    },
    industry: {
      type: String,
      required: true
    },
    organizationType: {
      type: String,
      required: true
    },
    organizationSize: {
      type: Number,
      required: true
    },
    linkedInProfile: {
      type: String,
      unique: true,
      required: true
    },
    avatar: {
      type: String,
      default: "https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg"
    },
    userRef: {
      ref: "User",
      type: String
    },
    tagLine: {
      type: String
    }
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
export default Company;
