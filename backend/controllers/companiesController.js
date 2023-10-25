import { errorHandler } from "../utils/errorHandler.js";
import Company from "../models/Company.js";

export const getCompany = async (req, res, next) => {
  try {
    const company = await Company.findById(req.params.id).populate("userRef", "-password");
    if (!company) return next(errorHandler(404, "No company was found"));

    res.status(200).json(company);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const getCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find().populate("userRef", "-password");
    res.status(200).json(companies);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const createCompany = async (req, res, next) => {
  const { name, linkedInProfile, organizationSize, organizationType, industry, website, tagLine } = req.body;
  try {
    const company = await Company.create({
      name,
      linkedInProfile,
      organizationSize,
      organizationType,
      website,
      industry,
      tagLine,
      userRef: req.user.id
    });
    await company.populate("userRef", "-password");
    res.status(200).json(company);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const updateCompany = async (req, res, next) => {
  const { name, linkedInProfile, organizationSize, organizationType, industry, website, tagLine } = req.body;
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return next(errorHandler(404, "No listing was found"));
    if (company.userRef !== req.user.id) return next(errorHandler(400, "You are not allowed to perform this action"));

    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      {
        name,
        linkedInProfile,
        organizationSize,
        organizationType,
        industry,
        website,
        tagLine
      },
      { new: true }
    ).populate("userRef", "-password");
    res.status(200).json(updatedCompany);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const deleteCompany = async (req, res, next) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return next(errorHandler(404, "Company not found"));
    if (company.userRef !== req.user.id) return next(errorHandler(403, "Not authorized"));

    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete successful");
  } catch (error) {
    next(error);
    console.log(error);
  }
};
