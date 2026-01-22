// App.jsx
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Bootstrap UI Experiment
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Responsive Design</h5>
                <p className="card-text">
                  Bootstrap helps create responsive layouts quickly using its
                  grid system.
                </p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Reusable Components</h5>
                <p className="card-text">
                  Components like cards, buttons, and forms save development
                  time.
                </p>
                <button className="btn btn-success">Explore</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Easy Styling</h5>
                <p className="card-text">
                  Predefined classes make styling consistent and simple.
                </p>
                <button className="btn btn-warning">Try Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center mb-3">
                  Contact Form
                </h4>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-dark">
                      Submit
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
