import React from "react";
import {Link} from "react-router-dom";

const Classes = () => {
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
          <h3 className="display-3 font-weight-bold text-white">Our Classes</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <a className="text-white" href="#profile">
                Home
              </a>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Our Classes</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Popular Classes</span>
            </p>
            <h1 className="mb-4">Classes for Your Kids</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src="assests/img/class-1.jpg" alt="" />
                <div className="card-body text-center">
                  <h4 className="card-title">Drawing Class</h4>
                  <p className="card-text">
                    Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                    ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                  </p>
                </div>
                <div className="card-footer bg-transparent py-4 px-5">
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Age of Kids</strong>
                    </div>
                    <div className="col-6 py-1">3 - 6 Years</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Total Seats</strong>
                    </div>
                    <div className="col-6 py-1">40 Seats</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Class Time</strong>
                    </div>
                    <div className="col-6 py-1">08:00 - 10:00</div>
                  </div>
                  <div className="row">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Tution Fee</strong>
                    </div>
                    <div className="col-6 py-1">$290 / Month</div>
                  </div>
                </div>
                <a href="#profile" className="btn btn-primary px-4 mx-auto mb-4">
                  Join Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src="assests/img/class-2.jpg" alt="" />
                <div className="card-body text-center">
                  <h4 className="card-title">Language Learning</h4>
                  <p className="card-text">
                    Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                    ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                  </p>
                </div>
                <div className="card-footer bg-transparent py-4 px-5">
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Age of Kids</strong>
                    </div>
                    <div className="col-6 py-1">3 - 6 Years</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Total Seats</strong>
                    </div>
                    <div className="col-6 py-1">40 Seats</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Class Time</strong>
                    </div>
                    <div className="col-6 py-1">08:00 - 10:00</div>
                  </div>
                  <div className="row">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Tution Fee</strong>
                    </div>
                    <div className="col-6 py-1">$290 / Month</div>
                  </div>
                </div>
                <a href="#profile" className="btn btn-primary px-4 mx-auto mb-4">
                  Join Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src="assests/img/class-3.jpg" alt="" />
                <div className="card-body text-center">
                  <h4 className="card-title">Basic Science</h4>
                  <p className="card-text">
                    Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                    ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                  </p>
                </div>
                <div className="card-footer bg-transparent py-4 px-5">
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Age of Kids</strong>
                    </div>
                    <div className="col-6 py-1">3 - 6 Years</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Total Seats</strong>
                    </div>
                    <div className="col-6 py-1">40 Seats</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Class Time</strong>
                    </div>
                    <div className="col-6 py-1">08:00 - 10:00</div>
                  </div>
                  <div className="row">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Tution Fee</strong>
                    </div>
                    <div className="col-6 py-1">$290 / Month</div>
                  </div>
                </div>
                <a href="#profile" className="btn btn-primary px-4 mx-auto mb-4">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="section-title pr-5">
                <span className="pr-2">Book A Seat</span>
              </p>
              <h1 className="mb-4">Book A Seat For Your Kid</h1>
              <p>
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <ul className="list-inline m-0">
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3"></i>Labore eos amet
                  dolor amet diam
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3"></i>Etsea et sit
                  dolor amet ipsum
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3"></i>Diam dolor diam
                  elitripsum vero.
                </li>
              </ul>
              <a href="#profile" className="btn btn-primary mt-4 py-2 px-4">
                Book Now
              </a>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-secondary text-center p-4">
                  <h1 className="text-white m-0">Book A Seat</h1>
                </div>
                <div className="card-body rounded-bottom bg-primary p-5">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{height: "47px"}}
                      >
                        <option selected>Select A Class</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 1</option>
                        <option value="3">Class 1</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-secondary btn-block border-0 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a
              href="#profile"
              className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
              style={{fontSize: "40px", lineHeight: "40px"}}
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
                style={{width: "38px", height: "38px"}}
                href="#profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{width: "38px", height: "38px"}}
                href="#profile"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{width: "38px", height: "38px"}}
                href="#profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{width: "38px", height: "38px"}}
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
          style={{borderTop: "1px solid rgba(23, 162, 184, 0.2)"}}
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

export default Classes;
