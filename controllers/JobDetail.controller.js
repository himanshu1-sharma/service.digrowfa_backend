const JobDetail = require("../models/JobDetail.model");
const { default: mongoose } = require("mongoose");
const ObjectId = require("mongodb").ObjectId;

exports.createJobDetail = async (req, res) => {
    try {
        let {
            category,
            title,
            description,
            responsibilities,
            qualification,
            skills,
            minExperience,
            maxExperience,
            location,
            jobType,
            workType,
            isUrgent,
        } = req.body;

        let newJobDetail = new JobDetail({
            category,
            title,
            description,
            responsibilities: responsibilities ? responsibilities : [],
            qualification: qualification ? qualification : [],
            skills: skills ? skills : [],
            minExperience,
            maxExperience,
            location,
            jobType,
            workType,
            isUrgent,
        });

        newJobDetail = await newJobDetail.save();

        return res
            .status(201)
            .json({
                errorcode: 0,
                status: true,
                message: "Job Detail added successfully",
                data: newJobDetail,
            });
    } catch (error) {
        console.log("error", error);
        return res
            .status(204)
            .json({
                errorcode: 5,
                status: false,
                message: error.message,
                data: error,
            });
    }
};

exports.getAllJobList = async (req, res) => {
    try {
        let allJobList = await JobDetail.find({})
            .populate([
                {
                    path: "category",
                    model: "JobCategory",
                    select: "name image",
                },
            ])
            .sort({ created_ts: -1 });
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all category successfully",
            data: allJobList,
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

exports.deleteJobListById = async (req, res) => {
    try {
        let { id } = req.params;
        if (!id)
            return res.status(403).json({
                errorcode: 1,
                status: false,
                message: "Id should be Present",
                data: null,
            });
        let categories = await JobDetail.findById({ _id: id });
        if (!categories)
            return res.status(404).json({
                errorcode: 2,
                status: false,
                message: "Id not found",
                data: null,
            });
        await JobDetail.deleteOne({ _id: id });
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Job deleted successfully",
            data: null,
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

exports.editJobById = async (req, res) => {
    try {
        let {
            id,
            title,
            description,
            responsibilities,
            qualification,
            skills,
            minExperience,
            maxExperience,
            location,
            jobType,
            workType,
            isUrgent,
        } = req.body;
        if (!id)
            return res.status(403).json({
                errorcode: 1,
                status: false,
                message: "Id should be Present",
                data: null,
            });
        let editJob = await JobDetail.findById({ _id: id });

        if (!editJob)
            return res.status(404).json({
                errorcode: 2,
                status: false,
                message: "Id not found",
                data: null,
            });
        editJob.title = title ? title : editJob.title;
        editJob.description = description ? description : editJob.description
        editJob.responsibilities = responsibilities.length !== 0 ? responsibilities : editJob.responsibilities
        editJob.qualification = qualification.length !== 0 ? qualification : editJob.qualification
        editJob.skills = skills.length !== 0 ? skills : editJob.skills
        editJob.minExperience = minExperience ? minExperience : editJob.minExperience
        editJob.maxExperience = maxExperience ? maxExperience : editJob.maxExperience
        editJob.location = location ? location : editJob.location
        editJob.jobType = jobType ? jobType : editJob.jobType
        editJob.workType = workType ? workType : editJob.workType
        editJob.isUrgent = isUrgent ? isUrgent : editJob.isUrgent

        await editJob.save()
        return res.status(200).json({
            errorcode: 0,
            status: false,
            message: "Job edit successfully",
            data: editJob
        })
    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error,
        });
    }
};

exports.getJobDetailById = async (req, res) => {
    try {
        const { id } = req.params
        let jobDetailById = await JobDetail.find({ _id: id }).populate([
            {
                path: "category",
                model: "JobCategory",
                select: "name image",
            }
        ])
        if (!jobDetailById) return res.status(404).json({
            errorcode: 2,
            status: true,
            message: "Category not found",
            data: null
        })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Category Detail found",
            data: jobDetailById
        })
    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error,
        });
    }
}
