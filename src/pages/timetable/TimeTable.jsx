import React from "react";

const TimeTable = () => {
  return (
    <div class="container g-2 border rounded d-flex justify-content-center border bg-light my-5 ">
      <div class="row gx-5 ">
        <div class="col ">
          <div class="row gy-1  ">
            <h5>View Time Table</h5>
          </div>
          <div class="p-3 ">
            <div class="row d-flex justify-content-center">Select Day</div>
            <div class="row ">
              <div class="dropdown d-flex justify-content-center">
                <button
                  class="btn btn-light border dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Day :
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Tommorrow
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Week
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row d-flex justify-content-center">
              <button type="button" class="btn btn-success">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
