import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {

  const [Blog, setBlog] = useState([]);

  useEffect(() => {
    loadUser4();
  }, []);

  const loadUser4 = async () => {
    const result5 = await axios.get("http://localhost:1337/api/blogs");
    setBlog(result5.data.data);
  };
  return (
    <>
     <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <div
            
            className="navbar-brand font-weight-bold text-secondary"
            style={{fontSize: "50px"}}
            
          >
            <i className="flaticon-043-teddy-bear"></i>
            <span className="text-primary">KidKinder</span>
            <Link to="#profile"></Link>
          </div>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <div className="nav-item nav-link active">
                <Link to="/">Home</Link>
              </div>
              <div className="nav-item nav-link">
              <Link to="About">About</Link>
              </div>
              <div className="nav-item nav-link">
              <Link to="Classes">Classes</Link>
              </div>
              <div  className="nav-item nav-link">
              <Link to="Teachers">Teachers</Link>
              </div>
              <div  className="nav-item nav-link">
              <Link to="Gallery">Gallery</Link>
              </div>
              <div className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                 <Link to="#profile">Pages</Link>
                </div>
                <div className="dropdown-menu rounded-0 m-0">
                  <div  className="dropdown-item">
                  <Link to="Blog">Blog Grid</Link>
                  </div>
                  <div className="dropdown-item">
                  <Link to="Single">Blog Detail</Link>
                  </div>
                </div>
              </div>
              <div className="nav-item nav-link">
              <Link to="Contact">Contact</Link>
              </div>
            </div>
            <div className="btn btn-primary px-4">
            <Link to="#profile">Join Class</Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="container-fluid bg-primary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{minHeight: "400px"}}
        >
          <h3 className="display-3 font-weight-bold text-white">Our Blog</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <a className="text-white" href="#profile">
                Home
              </a>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Our Blog</p>
          </div>
        </div>
      </div>

      {Blog.map((Blog1) => (
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2"><td>{Blog1.attributes?.title1}</td></span>
            </p>
            <h1 className="mb-4">{Blog1.attributes?.title2}</h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img
                  className="card-img-top mb-2"
                  src="assests/img/blog-1.jpg"
                  alt=""
                />
                <div className="card-body bg-light text-center p-4">
                  <h4 className="">{Blog1.attributes?.heading1}</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary"></i> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary"></i> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary"></i> 15
                    </small>
                  </div>
                  <p>
                  <td>{Blog1.attributes?.description1}</td>
                  </p>
                  <a
                    href="#profile"
                    className="btn btn-primary px-4 mx-auto my-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img
                  className="card-img-top mb-2"
                  src="assests/img/blog-2.jpg"
                  alt=""
                />
                <div className="card-body bg-light text-center p-4">
                  <h4 className="">{Blog1.attributes?.heading2}</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary"></i> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary"></i> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary"></i> 15
                    </small>
                  </div>
                  <p>
                  <td>{Blog1.attributes?.description2}</td>
                  </p>
                  <a
                    href="#profile"
                    className="btn btn-primary px-4 mx-auto my-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm mb-2">
                <img
                  className="card-img-top mb-2"
                  src="assests/img/blog-3.jpg"
                  alt=""
                />
                <div className="card-body bg-light text-center p-4">
                  <h4 className="">{Blog1.attributes?.heading3}</h4>
                  <div className="d-flex justify-content-center mb-3">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary"></i> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary"></i> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary"></i> 15
                    </small>
                  </div>
                  <p>
                  <td>{Blog1.attributes?.description3}</td>
                  </p>
                  <a
                    href="#profile"
                    className="btn btn-primary px-4 mx-auto my-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}

      <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a
              href="#profile"
              className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
              style={{ fontSize: "40px", lineHeight: "40px" }}
            >
              <i className="flaticon-043-teddy-bear"></i>
              <span className="text-white">KidKinder</span>
            </a>
            <p>
              Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
              dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet
              elitr stet diam duo eos rebum ipsum diam ipsum elitr.
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#profile"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="#profile"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Get In Touch</h3>
            <div className="d-flex">
              <h4 className="fa fa-map-marker-alt text-primary"> </h4>
              <div className="pl-3">
                <h5 className="text-white">Address</h5>
                <p>123 Street, New York, USA</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-envelope text-primary"> </h4>
              <div className="pl-3">
                <h5 className="text-white">Email</h5>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="d-flex">
              <h4 className="fa fa-phone-alt text-primary"> </h4>
              <div className="pl-3">
                <h5 className="text-white">Phone</h5>
                <p>+012 345 67890</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#profile">
                <i className="fa fa-angle-right mr-2"></i>Home
              </a>
              <a className="text-white mb-2" href="#profile">
                <i className="fa fa-angle-right mr-2"></i>About Us
              </a>
              <a className="text-white mb-2" href="#profile">
                <i className="fa fa-angle-right mr-2"></i>Our Classes
              </a>
              <a className="text-white mb-2" href="#profile">
                <i className="fa fa-angle-right mr-2"></i>Our Teachers
              </a>
              <a className="text-white mb-2" href="#profile">
                <i className="fa fa-angle-right mr-2"></i>Our Blog
              </a>
              <a className="text-white" href="#profile">
                <i className="fa fa-angle-right mr-2"></i>Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0 py-4"
                  placeholder="Your Name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0 py-4"
                  placeholder="Your Email"
                  required="required"
                />
              </div>
              <div>
                <button
                  className="btn btn-primary btn-block border-0 py-3"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="container-fluid pt-5"
          style={{ borderTop: "1px solid rgba(23, 162, 184, 0.2)" }}
        >
          <p className="m-0 text-center text-white">
            &copy;
            <a className="text-primary font-weight-bold" href="#profile">
              Your Site Name
            </a>
            . All Rights Reserved. Designed by
            <a
              className="text-primary font-weight-bold"
              href="https://htmlcodex.com"
            >
              HTML Codex
            </a>
            <br />
            Distributed By:
            <a href="https://themewagon.com" target="noopener">
              ThemeWagon
            </a>
          </p>
        </div>
      </div>

      <a href="#profile" className="btn btn-primary p-3 back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="assests/lib/easing/easing.min.js"></script>
      <script src="assests/lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="assests/lib/isotope/isotope.pkgd.min.js"></script>
      <script src="assests/lib/lightbox/js/lightbox.min.js"></script>

      <script src="assests/mail/jqBootstrapValidation.min.js"></script>
      <script src="assests/mail/contact.js"></script>

      <script src="assests/js/main.js"></script>
    </>
  );
};

export default Blog;
