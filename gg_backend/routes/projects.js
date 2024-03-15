import express from "express";
import {
    getProjectDetails,
    getProjects,
    newProject,
} from "../controllers/projectControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/projects").get(getProjects);
router
    .route("/admin/projects")
    .post(isAuthenticatedUser, authorizeRoles("admin"), newProject);
router.route("/projects/:id").get(getProjectDetails);

export default router;
