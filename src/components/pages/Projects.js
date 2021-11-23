import React from "react";

function Projects() {
    return (
        <div id="portfolio" className="portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>A collection of my work</p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">
                                All
                            </li>
                            <li data-filter=".filter-gp">Group Projects</li>
                            <li data-filter=".filter-sw">Solo Work</li>
                            <li data-filter=".filter-le">Learning</li>
                            <li data-filter=".filter-sh">Sharing</li>
                            <li data-filter=".filterjs-">JS</li>
                            <li data-filter=".filter-css">CSS</li>
                            <li data-filter=".filter-html">HTML</li>
                            <li data-filter=".filter-ill">Illustrator</li>
                            <li data-filter=".filter-aeff">After Effects</li>
                            <li data-filter=".filter-react">React</li>
                            <li data-filter=".filter-sass">Sass</li>
                            <li data-filter=".filter-babel">Babel</li>
                            <li data-filter=".filter-fbase">Firebase</li>
                            <li data-filter=".filter-animations">Animations</li>
                            <li data-filter=".filter-modb">MongoDB</li>
                            <li data-filter=".filter-xp">Express</li>
                            <li data-filter=".filter-node">Node</li>
                            <li data-filter=".filter-bulma">Bulma</li>
                            <li data-filter=".filter-chartjs">ChartJS</li>
                            <li data-filter=".filter-mongatl">Mongo Atlas</li>
                            <li data-filter=".filter-repliy">Replit</li>
                            <li data-filter=".filter-dj">Django</li>
                            <li data-filter=".filter-py">Python</li>
                            <li data-filter=".filter-tk">Tkinter</li>
                            <li data-filter=".filter-json">JSON</li>
                            <li data-filter=".filter-mysql">MySQL</li>

                        </ul>
                    </div>
                </div>

                <div
                    className="row portfolio-container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="col-lg-4 col-md-6 portfolio-item filter-le">
                        <div className="portfolio-wrap">
                            {/* <img src="/images/surfup.jpg" className="img-fluid" alt="" /> */}
                            <div className="portfolio-links">
                                <a href="jonchristie.io">Portfolio Place Holder</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-gp">
                        <div className="portfolio-wrap">
                            {/* <img src="/images/surfup.jpg" className="img-fluid" alt="" /> */}
                            <div className="portfolio-links">
                                <a href="jonchristie.io">Portfolio Place Holder</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-sh">
                        <div className="portfolio-wrap">
                            {/* <img src="/images/surfup.jpg" className="img-fluid" alt="" /> */}
                            <div className="portfolio-links">
                                <a href="jonchristie.io">Portfolio Place Holder</a>{" "}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-JS">
                        <div className="portfolio-wrap">
                            {/* <img src="/images/surfup.jpg" className="img-fluid" alt="" /> */}
                            <div className="portfolio-links">
                                <a href="jonchristie.io">Portfolio Place Holder</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-handlebars">
                        <div className="portfolio-wrap">
                            {/* <img src="/images/surfup.jpg" className="img-fluid" alt="" /> */}
                            <div className="portfolio-links">
                                <a href="jonchristie.io">Portfolio Place Holder</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress">
                        <div className="portfolio-wrap">
                            {/* <img src="/images/surfup.jpg" className="img-fluid" alt="" /> */}
                            <div className="portfolio-links">
                                <a href="jonchristie.io">Portfolio Place Holder</a>{" "}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;






