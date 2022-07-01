import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Axios from "axios";
import axios from "axios";

const Home = () => {
  
  const [Homepagepart1, setHomepagepart1] = useState([]);
  const [Aboutpart1, setAboutpart1] = useState([]);
  const [Classes1, setClasses1] = useState([]);
  const [Bookaseat, setBookaseat] = useState([]);
  const [Testimonial, setTestimonial] = useState([]);
  const [Blog, setBlog] = useState([]);
  const [Teachers1, setTeachers1] = useState([]);
  const [Bookaseat1, setBookaseat1] = useState({
    fname: "",
    email: ""
  });

  const [selectedOption1, setselectedOption1] = useState("");

  useEffect(() => {
    loadUsers();
    loadUser();
    loadUser1();
    loadUser2();
    loadUser3();
    loadUser4();
    loadUser5();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:1337/api/homepagepart1s");
    setHomepagepart1(result.data.data);
  };

  const loadUser = async () => {
    const result1 = await axios.get("http://localhost:1337/api/aboutpart1s");
    setAboutpart1(result1.data.data);
  };

  const loadUser1 = async () => {
    const result2 = await axios.get("http://localhost:1337/api/classes1s");
    setClasses1(result2.data.data);
  };

  const loadUser2 = async () => {
    const result3 = await axios.get("http://localhost:1337/api/bookaseats");
    setBookaseat(result3.data.data);
  };

  const loadUser3 = async () => {
    const result4 = await axios.get("http://localhost:1337/api/testimonials");
    setTestimonial(result4.data.data);
  };

  const loadUser4 = async () => {
    const result5 = await axios.get("http://localhost:1337/api/blogs");
    setBlog(result5.data.data);
  };

  const loadUser5 = async () => {
    const result6 = await axios.get(`http://localhost:1337/api/teachers1s?populate=*`);
    console.log(result6)
    setTeachers1(result6.data.data);
  };

  

  const url = "http://localhost:1337/api/bookaseat1s";

  const submit = (e) => {
    e.preventDefault();
  const data = {
  fname: Bookaseat1.fname,
  email: Bookaseat1.email,
  selectedoption: selectedOption1
}

console.log(data);
    Axios.post(url, {
      data
    })
    .then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    const newdata = { ...Bookaseat1 };
    newdata[e.target.id] = e.target.value;
    setBookaseat1(newdata);
    console.log(newdata);
  }


  const selectedClass = (value) => {
    setselectedOption1(value)
  }
  return (
    <>
      <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <div
            className="navbar-brand font-weight-bold text-secondary"
            style={{ fontSize: "50px" }}
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
              <div className="nav-item nav-link">
                <Link to="Teachers">Teachers</Link>
              </div>
              <div className="nav-item nav-link">
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
                  <div className="dropdown-item">
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

      {Homepagepart1.map((Homepagepart) => (
        <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
          <div className="row align-items-center px-3">
            <div className="col-lg-6 text-center text-lg-left">
              <h4 className="text-white mb-4 mt-5 mt-lg-0">
                <td>{Homepagepart.attributes?.title1}</td>
              </h4>
              <h1 className="display-3 font-weight-bold text-white">
                <td>{Homepagepart.attributes?.title2}</td>
              </h1>
              <p className="text-white mb-4">
                <td>{Homepagepart.attributes?.description}</td>
              </p>
              <a href="#profile" className="btn btn-secondary mt-1 py-3 px-5">
                Learn More
              </a>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <img
                className="img-fluid mt-5"
                src="assests/img/header.png"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}

      <div className="container-fluid pt-5">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "30px" }}
              >
                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                  <h4>Play Ground</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "30px" }}
              >
                <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                  <h4>Music and Dance</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "30px" }}
              >
                <i className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                  <h4>Arts and Crafts</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "30px" }}
              >
                <i className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                  <h4>Safe Transportation</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "30px" }}
              >
                <i className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                  <h4>Healthy food</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "30px" }}
              >
                <i className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                  <h4>Educational Tour</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Aboutpart1.map((Aboutpart) => (
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="assests/img/about-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-7">
                <p className="section-title pr-5">
                  <span className="pr-2">
                    <td>{Aboutpart.attributes?.title1}</td>
                  </span>
                </p>
                <h1 className="mb-4">
                  <td>{Aboutpart.attributes?.title2}</td>
                </h1>
                <p>
                  <td>{Aboutpart.attributes?.description}</td>
                </p>
                <div className="row pt-2 pb-4">
                  <div className="col-6 col-md-4">
                    <img
                      className="img-fluid rounded"
                      src="assests/img/about-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-8">
                    <ul className="list-inline m-0">
                      <li className="py-2 border-top border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>
                        {Aboutpart.attributes?.heading1}
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>
                        {Aboutpart.attributes?.heading2}
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>
                        {Aboutpart.attributes?.heading3}
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#profile" className="btn btn-primary mt-2 py-2 px-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {Classes1.map((Classes) => (
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">
                  <td>{Classes.attributes?.title1}</td>
                </span>
              </p>
              <h1 className="mb-4">{Classes.attributes?.title2}</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                  <img
                    className="card-img-top mb-2"
                    src="assests/img/class-1.jpg"
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      {Classes.attributes?.heading1}
                    </h4>
                    <p className="card-text">
                      {Classes.attributes?.description1}
                    </p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key1}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value1}</td>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key2}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value2}</td>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key3}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value3}</td>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key4}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value4}</td>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#profile"
                    className="btn btn-primary px-4 mx-auto mb-4"
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                  <img
                    className="card-img-top mb-2"
                    src="assests/img/class-2.jpg"
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      {Classes.attributes?.heading2}
                    </h4>
                    <p className="card-text">
                      <td>{Classes.attributes?.description2}</td>
                    </p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key1}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value1}</td>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key2}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value2}</td>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key3}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value3}</td>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key4}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value4}</td>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#profile"
                    className="btn btn-primary px-4 mx-auto mb-4"
                  >
                    Join Now
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card border-0 bg-light shadow-sm pb-2">
                  <img
                    className="card-img-top mb-2"
                    src="assests/img/class-3.jpg"
                    alt=""
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">
                      {Classes.attributes?.heading3}
                    </h4>
                    <p className="card-text">
                      <td>{Classes.attributes?.description3}</td>
                    </p>
                  </div>
                  <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key1}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value1}</td>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key2}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value2}</td>
                      </div>
                    </div>
                    <div className="row border-bottom">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key3}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value3}</td>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 py-1 text-right border-right">
                        <strong>
                          <td>{Classes.attributes?.key4}</td>
                        </strong>
                      </div>
                      <div className="col-6 py-1">
                        <td>{Classes.attributes?.value4}</td>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#profile"
                    className="btn btn-primary px-4 mx-auto mb-4"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            {Bookaseat.map((Bookseat) => (
              <div className="col-lg-7 mb-5 mb-lg-0">
                <p className="section-title pr-5">
                  <span className="pr-2">
                    <td>{Bookseat.attributes?.title1}</td>
                  </span>
                </p>
                <h1 className="mb-4">{Bookseat.attributes?.title2}</h1>
                <p>
                  <td>{Bookseat.attributes?.description}</td>
                </p>
                <ul className="list-inline m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-success mr-3"></i>
                    {Bookseat.attributes?.heading1}
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-success mr-3"></i>
                    {Bookseat.attributes?.heading2}
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-success mr-3"></i>
                    {Bookseat.attributes?.heading3}
                  </li>
                </ul>
                <a href="#profile" className="btn btn-primary mt-4 py-2 px-4">
                  Book Now
                </a>
              </div>
            ))}

            <div className="col-lg-5">
              <div className="card border-0">
                <form>
                  <div className="card-header bg-secondary text-center p-4">
                    <h1 className="text-white m-0">Book A Seat</h1>
                  </div>

                  <div className="card-body rounded-bottom bg-primary p-5">
                    <form>
                      <div className="form-group">
                        <input
                          className="form-control border-0 p-4"
                          onChange={(e) => handle(e)}
                          placeholder="Your Name"
                          required="required"
                          id="fname"
                          value={Bookaseat1.fname}
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control border-0 p-4"
                          onChange={(e) => handle(e)}
                          placeholder="Your Email"
                          required="required"
                          id="email"
                          value={Bookaseat1.email}
                          type="email"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="custom-select border-0 px-4"
                          style={{ height: "47px" }}
                          onChange={(e) => selectedClass(e.target.value)}
                          // value={Bookaseat1.selectedoption}
                        >
                          <option selected value="">Select A Class</option>
                          <option value="Class 1">Class 1</option>
                          <option value="Class 2">Class 2</option>
                          <option value="Class 3">Class 3</option>
                        </select>
                      </div>
                      <div>
                        <button
                          className="btn btn-secondary btn-block border-0 py-3"
                          type="submit"
                          onClick={(e) => submit(e)}
                        >
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



      {Teachers1.map((Teachers) => (
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">OUR TEACHERS</span>
            </p>
            <h1 className="mb-4">Meet Our Teachers</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ bordeRadius: "100%" }}
              >
                <img
                  className="img-fluid w-100"
                  src={"http://localhost:1337" + Teachers.attributes?.image?.data[0]?.attributes?.url}                    
                  alt=""
                />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h4>{Teachers.attributes?.name1}</h4>
              <i>{Teachers.attributes?.role1}</i>
              <i>{Teachers.attributes?.image?.data[0]?.attributes?.url}</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ bordeRadius: "100%" }}
              >
                <img
                  className="img-fluid w-100"
                  src="assests/img/team-2.jpg"
                  alt=""
                />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h4>{Teachers.attributes?.name1}</h4>
              <i>{Teachers.attributes?.role1}</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ bordeRadius: "100%" }}
              >
                <img
                  className="img-fluid w-100"
                  src="assests/img/team-3.jpg"
                  alt=""
                />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h4>{Teachers.attributes?.name1}</h4>
              <i>{Teachers.attributes?.role1}</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div
                className="position-relative overflow-hidden mb-4"
                style={{ bordeRadius: "100%" }}
              >
                <img
                  className="img-fluid w-100"
                  src="assests/img/team-4.jpg"
                  alt=""
                />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#profile"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h4>{Teachers.attributes?.name1}</h4>
              <i>{Teachers.attributes?.role1}</i>
            </div>
          </div>
        </div>
      </div>
      ))}

      {Testimonial.map((Testimonial1) => (
        <div className="container-fluid py-5">
          <div className="container p-0">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">
                  TESTIMONIAL
                </span>
              </p>
              <h1 className="mb-4">What Parents Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3"> 
                  <p>{Testimonial1.attributes?.quotes}</p>
                  </h3>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="assests/img/testimonial-1.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt="Image1"
                  />
                  <div className="pl-3">
                    <h5>{Testimonial1.attributes?.name}</h5>
                    <i><td>{Testimonial1.attributes?.proff}</td></i>
                  </div>
                </div>
              </div>
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3"> </h3>
                   <p>{Testimonial1.attributes?.quotes}</p> 
                  
                </div>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="assests/img/testimonial-2.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt="Image1"
                  />
                  <div className="pl-3">
                    <h5>{Testimonial1.attributes?.name}</h5>
                    <i>{Testimonial1.attributes?.proff}</i>
                  </div>
                </div>
              </div>
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3"> </h3>
                    {Testimonial1.attributes?.quotes}
                  
                </div>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="assests/img/testimonial-3.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt="Image1"
                  />
                  <div className="pl-3">
                    <h5>{Testimonial1.attributes?.name}</h5>
                    <i>{Testimonial1.attributes?.proff}</i>
                  </div>
                </div>
              </div>
              <div className="testimonial-item px-3">
                <div className="bg-light shadow-sm rounded mb-4 p-4">
                  <h3 className="fas fa-quote-left text-primary mr-3"> </h3>
                    {Testimonial1.attributes?.quotes}
                  
                </div>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="assests/img/testimonial-4.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt="Image1"
                  />
                  <div className="pl-3">
                    <h5>{Testimonial1.attributes?.name}</h5>
                    <i>{Testimonial1.attributes?.proff}</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

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

export default Home;
