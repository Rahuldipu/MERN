import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Project from "../models/project.js";
import ErrorHandler from "../utils/errorHandler.js";
import { delete_file, upload_file } from "../utils/cloudinary.js";

// get Projects => /api/v1/projects
export const getProjects = catchAsyncErrors(async (req, res, next) => {
    const resPerPage = 8;
    const currentPage = req.query.page || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = req.query.keyword
        ? {
              title: {
                  $regex: req.query.keyword,
                  $options: "i",
              },
          }
        : {};

    let projects = await Project.find({ ...keyword });

    let filteredProjectsCount = projects.length;
    projects = await Project.find({ ...keyword })
        .limit(resPerPage)
        .skip(skip)
        .select(["-sourceCode"]);

    res.status(200).json({
        resPerPage,
        filteredProjectsCount,
        projects,
    });
});

// Create new Project => /api/v1/admin/projects
export const newProject = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user._id;

    const project = await Project.create(req.body);

    res.status(200).json({
        project,
    });
});

// Get single project details => /api/v1/projects/:id
export const getProjectDetails = catchAsyncErrors(async (req, res, next) => {
    const project = await Project.findById(req?.params?.id).select([
        "-sourceCode",
    ]);

    if (!project) {
        return next(new ErrorHandler("Project not found.", 404));
    }

    res.status(200).json({
        project,
    });
});
