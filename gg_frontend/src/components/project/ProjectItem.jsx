import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={
                        project?.bannerImage
                            ? project?.bannerImage?.url
                            : "/images/default_product.png"
                    }
                    alt={project?.title}
                />
                <div className="card-body ps-3 d-flex justify-content-center flex-column">
                    <h5 className="card-title">
                        <Link to={`/project/${project?._id}`}>
                            {project?.title}
                        </Link>
                    </h5>
                    <div className="ratings mt-auto d-flex">
                        <span id="no_of_reviews" className="">
                            {project?.programmingLanguages}, {project?.frameworks}
                        </span>
                    </div>
                    <p className="card-text mt-2">₹{project?.price}</p>
                    <Link
                        to={`/project/${project?._id}`}
                        id="view_btn"
                        className="btn btn-block"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
