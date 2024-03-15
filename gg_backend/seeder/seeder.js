import mongoose from "mongoose";
import Project from "../models/project.js";
import projects from "./data.js";

const seedProjects = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/geeksglossary");

        await Project.deleteMany();
        console.log("Products are deleted");

        await Project.insertMany(projects);
        console.log("Products are inserted");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

seedProjects();
