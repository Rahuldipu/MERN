import React, { useEffect, useState } from "react";
import { useGetProjectDetailsQuery } from "../../redux/api/projectApi";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../layout/Loader";
import StarRatings from "react-star-ratings";
import MetaData from "../layout/MetaData";

const ProjectDetails = () => {
    const params = useParams();
    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState("");

    const { data, isLoading, error, isError, isSuccess } = useGetProjectDetailsQuery(
        params?.id
    );
    const project = data?.project;

    useEffect(() => {
        setActiveImg(
            project?.images[0]
                ? project?.images[0]?.url
                : "/images/default_product.png"
        );
    }, [project]);

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message);
        }
    }, [error]);

    console.log("Is success: ", isSuccess);

    if (isLoading) return <Loader />;
    return (
        <>
            <MetaData title={project?.title} />
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="project_image">
                    <div className="p-3">
                        <img
                            className="d-block w-100"
                            src={activeImg}
                            alt={project?.title}
                            width="340"
                            height="390"
                        />
                    </div>
                    <div className="row justify-content-start mt-5">
                        {project?.images?.map((img) => (
                            <div
                                key={img?.public_id}
                                className="col-2 ms-4 mt-2"
                            >
                                <a role="button">
                                    <img
                                        className={`d-block border rounded p-3 cursor-pointer ${
                                            img.url === activeImg
                                                ? "border-warning"
                                                : ""
                                        }`}
                                        height="100"
                                        width="100"
                                        src={img?.url}
                                        alt={img?.url}
                                        onClick={(e) => setActiveImg(img?.url)}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-12 col-lg-5 mt-5">
                    <h3>{project?.title}</h3>
                    <p id="project_id">Project # {project?._id}</p>

                    <hr />

                    <div className="d-flex">
                        <span id="no-of-reviews" className="">
                            {" "}
                            {project?.programmingLanguages},{" "}
                            {project?.frameworks}{" "}
                        </span>
                    </div>
                    <hr />

                    <p id="project_price">₹{project?.price}</p>
                    <button
                        type="button"
                        id="cart_btn"
                        className="btn btn-primary d-inline"
                        disabled={project?.stock <= 0}
                        // onClick={setItemToCart}
                    >
                        Add to Cart
                    </button>

                    <hr />

                    <h4 className="mt-2">Description:</h4>
                    <p>{project?.description}</p>
                    <hr />
                    <div class="embed-responsive embed-responsive-21by9">
                        <iframe
                            class="embed-responsive-item pb-3"
                            style={{width: "100%", height: "250px", borderRadius: "10px 30px"}}
                            src={project?.demoVideoUrl}
                            frameborder="2"
                            allowFullScreen="true"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
