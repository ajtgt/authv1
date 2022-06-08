import React from "react";

const Statistics = () => {
  return (
    <div className="container bg-light rounded mt-5">
      <div className="header d-flex justify-content-center">
        <h4>Reports</h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="row">Activity</div>
            <div class="row">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Running
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Select Activity
                  </a>
                  <a class="dropdown-item" href="#">
                    Running
                  </a>
                  <a class="dropdown-item" href="#">
                    Football
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">Sub Activity</div>
            <div class="row">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Running
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Select Activity
                  </a>
                  <a class="dropdown-item" href="#">
                    Running
                  </a>
                  <a class="dropdown-item" href="#">
                    Football
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">Component</div>
            <div class="row">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Running
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Select Activity
                  </a>
                  <a class="dropdown-item" href="#">
                    Running
                  </a>
                  <a class="dropdown-item" href="#">
                    Football
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">Date</div>
            <div class="row">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Running
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Select Activity
                  </a>
                  <a class="dropdown-item" href="#">
                    Running
                  </a>
                  <a class="dropdown-item" href="#">
                    Football
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">Activity</div>
            <div class="row"></div>
          </div>
        </div>

        <div class="container d-flex justify-content-center">
          <div className="row ">
            <div class="col ">
              <div class="row">Select Year:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
