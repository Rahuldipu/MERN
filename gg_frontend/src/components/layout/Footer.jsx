import React from "react";

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className="p-4" style={{ backgroundColor: "#718746" }}>
                <hr />
                <section className="mb-4">
                    <a
                        data-mdb-ripple-init
                        className="btn btn-outline btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-outline btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-outline btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-outline btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn btn-outline btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        data-mdb-ripple-init
                        className="btn btn-outline btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </section>
                <section className="mb-4">
                    <p style={{ color: "#ffffff" }}>
                        Innovative online platform designed to cater to the
                        needs of students, professionals, and hobbyists seeking
                        ready-made minor and major projects. Whether you're an
                        engineering student looking for a project to showcase
                        your skills or a professional seeking inspiration for
                        your next innovation.
                    </p>
                </section>
                <section className="">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a
                                        className="text-body"
                                        href="#!"
                                        style={{ fontWeight: "700" }}
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a
                                        className="text-body"
                                        href="#!"
                                        style={{ fontWeight: "700" }}
                                    >
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a
                                        className="text-body"
                                        href="#!"
                                        style={{ fontWeight: "700" }}
                                    >
                                        Disclaimer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div
                    className="text-center mt-2"
                    style={{ color: "#ffffff", fontSize: "12px" }}
                >
                    © 2024 Copyright:{" "}GeeksGlossary
                </div>
            </div>
        </footer>
    );
};

export default Footer;
