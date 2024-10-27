import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./HomePage.css";

function HomePage() {
    return (
        <div id="" className="d-flex justify-content-center align-items-center flex-column">
            <div id="intro-container" className="row gap-3 d-flex justify-content-center align-items-center w-100">
                <div className="col-sm d-flex justify-content-center align-items-center flex-column">
                    <span>
                        <span className="fs-1">Move Better.</span>
                        <h5>Discover Wellness Through Physical Therapy</h5>
                        <ul>
                            <li className="fs-6">One-on-one manual therapy</li>
                            <li className="fs-6">Same and next day appointments</li>
                            <li className="fs-6">No doctor referral needed</li>
                            <li className="fs-6">Your Lifetime Wellness Provider</li>
                        </ul>
                        <button>Schedule Appointment</button>
                    </span>
                </div>
                <div id="ratings-container" className="col-sm d-flex justify-content-center align-items-center flex-column">
                    <div id="rating-box" className="d-flex justify-content-center align-items-center flex-column">
                        <span className="fs-3">Experts in Physical Therapy</span>
                        <span className="fs-4">Dedicated to Patient Satisfaction</span>
                        <span className="fs-5">4.9 stars (out of 5)</span>
                        <span className="d-flex">
                            <i className="bi bi-star bi-yellow"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                        </span>
                        <span className="fs-5">and 24,061 reviews</span>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-column">
                <h1 className="text-center pt-5 p-e">Meet Our Doctors</h1>
                <div id="meet-our-doctors" className="row">
                    <div className="col-sm d-flex justify-content-center align-items-center flex-column ps-5 pe-5">
                        <span className="fs-6">
                            <p>Meet Dr. Vandit Shah and Dr. Surbhi Vora, our dedicated specialists committed to your health and recovery.</p>
                            <p>Dr. Vandit specializes in orthopedics, providing expert care for musculoskeletal issues. Whether you’re dealing with an injury or recovering from surgery, employs effective therapies to restore your mobility and reduce pain.</p>
                            <p>Dr. Surbhi focuses on neurology, helping patients with a variety of neurological conditions. With a compassionate approach, utilizes advanced techniques to manage symptoms and support your recovery journey.</p>
                        </span>
                    </div>
                    <div className="col-sm d-flex justify-content-center align-items-center flex-column">
                        <iframe src="https://www.youtube.com/embed/vmpz5u-b33o?si=LsiVgJOVE2eDSa-l" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen width="100%" height="100%"></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;