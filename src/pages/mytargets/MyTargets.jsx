import React from "react";
import {
  Container,
  Col,
  Row,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap";

const MyTargets = () => {
  return (
    <>
      <div class="container bg-light p-3 rounded">
        <div class="col">
          <div class="row d-flex justify-content-center text-center mx-3">
            <h6>Activity</h6>
          </div>
          <div class="row d-flex justify-content-center text-center mx-3">
            <div class="dropdown ">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Activity
              </button>
              <button>
                <img src="http://sams-ttipl.ddns.net/images/submit.png"></img>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Select Activity
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Running
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Football
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Activity</th>
                  <th scope="col">Sub Activity</th>
                  <th scope="col">Component</th>
                  <th scope="col">Date</th>
                  <th scope="col">Your Goal</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTargets;
