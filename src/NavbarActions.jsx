import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavbarActions.css"

function NavbarActions() {
  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center contact-info-container m-0">
        <div>
          <a className="" href="#">(+91 9981330699)</a>
        </div>
        <div>
          <button>Schedule Appointment</button>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  navbar-container m-0">
        <div className="container">
          <img src="src/assets/logo-6.png" alt="Brain-n-Bones" width={200} />
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-light" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5> */}
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-5 fs-6">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Graduation Visit</a></li>
                    <li><a className="dropdown-item" href="#"> Sports Rehab</a></li>
                    <li><a className="dropdown-item" href="#"> Run Assessment</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">For Patients</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}

export default NavbarActions;