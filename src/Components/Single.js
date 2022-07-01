import React from "react";
import {Link} from "react-router-dom";

const Single = () => {
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

      <div class="container-fluid bg-primary mb-5">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
          style={{minHeight: "400px"}}
        >
          <h3 class="display-3 font-weight-bold text-white">Blog Detail</h3>
          <div class="d-inline-flex text-white">
            <p class="m-0">
              <a class="text-white" href="#profile">
                Home
              </a>
            </p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">Blog Detail</p>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row pt-5">
          <div class="col-lg-8">
            <div class="d-flex flex-column text-left mb-3">
              <p class="section-title pr-5">
                <span class="pr-2">Blog Detail Page</span>
              </p>
              <h1 class="mb-3">Diam dolor est ipsum clita lorem</h1>
              <div class="d-flex">
                <p class="mr-3">
                  <i class="fa fa-user text-primary"></i> Admin
                </p>
                <p class="mr-3">
                  <i class="fa fa-folder text-primary"></i> Web Design
                </p>
                <p class="mr-3">
                  <i class="fa fa-comments text-primary"></i> 15
                </p>
              </div>
            </div>
            <div class="mb-5">
              <img
                class="img-fluid rounded w-100 mb-4"
                src="assests/img/detail.jpg"
                alt="Image1"
              />
              <p>
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
                rebum et lorem magna kasd, stet amet magna accusam consetetur
                eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
                Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                aliquyam ut et vero clita. Diam sea sea no sed dolores diam
                nonumy, gubergren sit stet no diam kasd vero.
              </p>
              <p>
                Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
                aliquyam dolores vero stet consetetur elitr takimata rebum
                sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
                sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
                sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo
                et, clita lorem sit vero amet amet est dolor elitr, stet et no
                diam sit. Dolor erat justo dolore sit invidunt.
              </p>
              <h2 class="mb-4">Est dolor lorem et ea</h2>
              <img
                class="img-fluid rounded w-50 float-left mr-4 mb-3"
                src="assests/img/blog-1.jpg"
                alt="Image1"
              />
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores
                sit kasd diam takimata justo diam lorem sed. Magna amet sed
                rebum eos. Clita no magna no dolor erat diam tempor rebum
                consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No
                at tempor sea diam kasd, takimata ea nonumy elitr sadipscing
                gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit
                amet ut ut, voluptua diam dolores at sadipscing stet. Clita
                dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores
                takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et,
                magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus
                ut consetetur et. Et duo tempor sea kasd clita ipsum et.
                Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed
                sadipscing no justo et eos labore, gubergren ipsum magna dolor
                lorem dolore, elitr aliquyam takimata sea kasd dolores diam,
                amet et est accusam labore eirmod vero et voluptua. Amet labore
                clita duo et no. Rebum voluptua magna eos magna, justo gubergren
                labore sit voluptua eos.
              </p>
              <h3 class="mb-4">Est dolor lorem et ea</h3>
              <img
                class="img-fluid rounded w-50 float-right ml-4 mb-3"
                src="assests/img/blog-2.jpg"
                alt="Image1"
              />
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores
                sit kasd diam takimata justo diam lorem sed. Magna amet sed
                rebum eos. Clita no magna no dolor erat diam tempor rebum
                consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No
                at tempor sea diam kasd, takimata ea nonumy elitr sadipscing
                gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit
                amet ut ut, voluptua diam dolores at sadipscing stet. Clita
                dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores
                takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et,
                magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus
                ut consetetur et. Et duo tempor sea kasd clita ipsum et.
                Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed
                sadipscing no justo et eos labore, gubergren ipsum magna dolor
                lorem dolore, elitr aliquyam takimata sea kasd dolores diam,
                amet et est accusam labore eirmod vero et voluptua. Amet labore
                clita duo et no.
              </p>
            </div>

            <div class="mb-5 mx-n3">
              <h2 class="mb-4 ml-3">Related Post</h2>
              <div class="owl-carousel post-carousel position-relative">
                <div class="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                  <img
                    class="img-fluid"
                    src="assests/img/post-1.jpg"
                    style={{width: "80px", height: "80px"}}
                    alt="Image1"
                  />
                  <div class="pl-3">
                    <h5 class="">Diam amet eos at no eos</h5>
                    <div class="d-flex">
                      <small class="mr-3">
                        <i class="fa fa-user text-primary"></i> Admin
                      </small>
                      <small class="mr-3">
                        <i class="fa fa-folder text-primary"></i> Web Design
                      </small>
                      <small class="mr-3">
                        <i class="fa fa-comments text-primary"></i> 15
                      </small>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                  <img
                    class="img-fluid"
                    src="assests/img/post-2.jpg"
                    style={{width: "80px", height: "80px"}}
                    alt="Image1"
                  />
                  <div class="pl-3">
                    <h5 class="">Diam amet eos at no eos</h5>
                    <div class="d-flex">
                      <small class="mr-3">
                        <i class="fa fa-user text-primary"></i> Admin
                      </small>
                      <small class="mr-3">
                        <i class="fa fa-folder text-primary"></i> Web Design
                      </small>
                      <small class="mr-3">
                        <i class="fa fa-comments text-primary"></i> 15
                      </small>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                  <img
                    class="img-fluid"
                    src="assests/img/post-3.jpg"
                    style={{width: "80px", height: "80px"}}
                    alt="Image1"
                  />
                  <div class="pl-3">
                    <h5 class="">Diam amet eos at no eos</h5>
                    <div class="d-flex">
                      <small class="mr-3">
                        <i class="fa fa-user text-primary"></i> Admin
                      </small>
                      <small class="mr-3">
                        <i class="fa fa-folder text-primary"></i> Web Design
                      </small>
                      <small class="mr-3">
                        <i class="fa fa-comments text-primary"></i> 15
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <h2 class="mb-4">3 Comments</h2>
              <div class="media mb-4">
                <img
                  src="assests/img/user.jpg"
                  alt="Image1"
                  class="img-fluid rounded-circle mr-3 mt-1"
                  style={{width: "45px"}}
                />
                <div class="media-body">
                  <h6>
                    John Doe{" "}
                    <small>
                      <i>01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                    consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button class="btn btn-sm btn-light">Reply</button>
                </div>
              </div>
              <div class="media mb-4">
                <img
                  src="assests/img/user.jpg"
                  alt="Image1"
                  class="img-fluid rounded-circle mr-3 mt-1"
                  style={{width: "45px"}}
                />
                <div class="media-body">
                  <h6>
                    John Doe{" "}
                    <small>
                      <i>01 Jan 2045 at 12:00pm</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam
                    consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button class="btn btn-sm btn-light">Reply</button>
                  <div class="media mt-4">
                    <img
                      src="assests/img/user.jpg"
                      alt="Image1"
                      class="img-fluid rounded-circle mr-3 mt-1"
                      style={{width: "45px"}}
                    />
                    <div class="media-body">
                      <h6>
                        John Doe{" "}
                        <small>
                          <i>01 Jan 2045 at 12:00pm</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at. Kasd diam tempor rebum
                        magna dolores sed sed eirmod ipsum. Gubergren clita
                        aliquyam consetetur, at tempor amet ipsum diam tempor at
                        sit.
                      </p>
                      <button class="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-light p-5">
              <h2 class="mb-4">Leave a comment</h2>
              <form>
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="website">Website</label>
                  <input type="url" class="form-control" id="website" />
                </div>

                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="5"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group mb-0">
                  <input
                    type="submit"
                    value="Leave Comment"
                    class="btn btn-primary px-3"
                  />
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-4 mt-5 mt-lg-0">
            <div class="d-flex flex-column text-center bg-primary rounded mb-5 py-5 px-4">
              <img
                src="assests/img/user.jpg"
                class="img-fluid rounded-circle mx-auto mb-3"
                style={{width: "100px"}}
                alt="Image1"
              />
              <h3 class="text-secondary mb-3">John Doe</h3>
              <p class="text-white m-0">
                Conset elitr erat vero dolor ipsum et diam, eos dolor lorem
                ipsum, ipsum ipsum sit no ut est. Guber ea ipsum erat kasd amet
                est elitr ea sit.
              </p>
            </div>

            <div class="mb-5">
              <form action="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Keyword"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text bg-transparent text-primary">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <div class="mb-5">
              <h2 class="mb-4">Categories</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  <a href="#profile">Web Design</a>
                  <span class="badge badge-primary badge-pill">150</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  <a href="#profile">Web Development</a>
                  <span class="badge badge-primary badge-pill">131</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  <a href="#profile">Online Marketing</a>
                  <span class="badge badge-primary badge-pill">78</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  <a href="#profile">Keyword Research</a>
                  <span class="badge badge-primary badge-pill">56</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  <a href="#profile">Email Marketing</a>
                  <span class="badge badge-primary badge-pill">98</span>
                </li>
              </ul>
            </div>

            <div class="mb-5">
              <img src="assests/img/blog-1.jpg" alt="" class="img-fluid rounded" />
            </div>

            <div class="mb-5">
              <h2 class="mb-4">Recent Post</h2>
              <div class="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="assests/img/post-1.jpg"
                  style={{width: "80px", height: "80px"}}
                  alt="Image1"
                />
                <div class="pl-3">
                  <h5 class="">Diam amet eos at no eos</h5>
                  <div class="d-flex">
                    <small class="mr-3">
                      <i class="fa fa-user text-primary"></i> Admin
                    </small>
                    <small class="mr-3">
                      <i class="fa fa-folder text-primary"></i> Web Design
                    </small>
                    <small class="mr-3">
                      <i class="fa fa-comments text-primary"></i> 15
                    </small>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="assests/img/post-2.jpg"
                  style={{width: "80px", height: "80px"}}
                  alt="Image1"      
                />
                <div class="pl-3">
                  <h5 class="">Diam amet eos at no eos</h5>
                  <div class="d-flex">
                    <small class="mr-3">
                      <i class="fa fa-user text-primary"></i> Admin
                    </small>
                    <small class="mr-3">
                      <i class="fa fa-folder text-primary"></i> Web Design
                    </small>
                    <small class="mr-3">
                      <i class="fa fa-comments text-primary"></i> 15
                    </small>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="assests/img/post-3.jpg"
                  style={{width: "80px", height: "80px"}}
                  alt="Image1"
                />
                <div class="pl-3">
                  <h5 class="">Diam amet eos at no eos</h5>
                  <div class="d-flex">
                    <small class="mr-3">
                      <i class="fa fa-user text-primary"></i> Admin
                    </small>
                    <small class="mr-3">
                      <i class="fa fa-folder text-primary"></i> Web Design
                    </small>
                    <small class="mr-3">
                      <i class="fa fa-comments text-primary"></i> 15
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <img src="assests/img/blog-2.jpg" alt="" class="img-fluid rounded" />
            </div>

            <div class="mb-5">
              <h2 class="mb-4">Tag Cloud</h2>
              <div class="d-flex flex-wrap m-n1">
                <a href="#profile" class="btn btn-outline-primary m-1">
                  Design
                </a>
                <a href="#profile" class="btn btn-outline-primary m-1">
                  Development
                </a>
                <a href="#profile" class="btn btn-outline-primary m-1">
                  Marketing
                </a>
                <a href="#profile" class="btn btn-outline-primary m-1">
                  SEO
                </a>
                <a href="#profile" class="btn btn-outline-primary m-1">
                  Writing
                </a>
                <a href="#profile" class="btn btn-outline-primary m-1">
                  Consulting
                </a>
              </div>
            </div>

            <div class="mb-5">
              <img src="assests/img/blog-3.jpg" alt="" class="img-fluid rounded" />
            </div>

            <div>
              <h2 class="mb-4">Plain Text</h2>
              Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea
              est aliquyam dolor et. Et no consetetur eos labore ea erat
              voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos
              tempor rebum dolor, tempor takimata clita sit et elitr ut eirmod.
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Latest Blog</span>
            </p>
            <h1 className="mb-4">Latest Articles From Blog</h1>
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
                  <h4 className="">Diam amet eos at no eos</h4>
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
                    Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                    eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                    lorem. Tempor ipsum justo amet stet...
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
                  <h4 className="">Diam amet eos at no eos</h4>
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
                    Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                    eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                    lorem. Tempor ipsum justo amet stet...
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
                  <h4 className="">Diam amet eos at no eos</h4>
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
                    Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam
                    eirmod, duo et sed sit eirmod kasd clita tempor dolor stet
                    lorem. Tempor ipsum justo amet stet...
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

export default Single;
