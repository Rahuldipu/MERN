import React, { useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useSearchParams } from "react-router-dom";
import { useGetProjectsQuery } from "../redux/api/projectApi";
import toast from "react-hot-toast";
import ProjectItem from "./project/ProjectItem";
import CustomPagination from "./layout/CustomPagination";
import Loader from "./layout/Loader";

const Home = () => {
    let [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const keyword = searchParams.get("keyword") || "";

    const params = { page, keyword };

    const { data, isLoading, error, isError } = useGetProjectsQuery(params);

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message);
        }
    }, [error]);

    if (isLoading) return <Loader />;

    return (
        <>
            <MetaData title={"Home - Projects"} />
            <div className="row">
                <div className="col-12 col-sm-6 col-md-12">
                    <h1 id="products_heading" className="text-secondary">
                        {keyword
                            ? `${data?.projects.length} Project${data?.projects.length > 1 ? "s" : ""} found with keyword: ${keyword}`
                            : "Latest Projects"}
                    </h1>

                    <section id="products" className="mt-5">
                        <div className="row">
                            {data?.projects?.map((project) => (
                                <ProjectItem
                                    project={project}
                                    key={project?._id}
                                />
                            ))}
                        </div>
                    </section>

                    <CustomPagination
                        resPerPage={data?.resPerPage}
                        filteredProjectsCount={data?.filteredProjectsCount}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
