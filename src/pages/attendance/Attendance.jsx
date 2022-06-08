import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import RegularSessions from "../../components/regularsessions/RegularSessions";
import MonthlySessions from "../../components/monthlysessions/MonthlySessions";
import MissedSessions from "../../components/missedsession/MissedSessions";

const Attendance = () => {
  return (
    <Router>
      <div className="container bg-light rounded my-5">
        <div className="header  d-flex justify-content-center text-center ">
          <h3 className="mt-2">Attendance Report</h3>
        </div>

        <div class="container ">
          <div class="row ">
            <div class="col">
              <Link to="/attendance/regularsessions">
                <button type="button" class="btn btn-light">
                  <h4>Regular Sessions</h4>
                </button>
              </Link>
            </div>

            <div class="col">
              <Link to="/attendance/monthlysessions">
                <button type="button" class="btn btn-light">
                  <h4>Monthly Sessions</h4>
                </button>
              </Link>
            </div>

            <div class="col">
              <Link to="/attendance/missedsessions">
                <button type="button" class="btn btn-light">
                  <h4>Missed Sessions</h4>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route
            exact
            path="/attendance/regularsessions"
            component={withRouter(RegularSessions)}
          ></Route>
          <Route
            exact
            path="/attendance/missedsessions"
            component={withRouter(MissedSessions)}
          ></Route>{" "}
          <Route
            exact
            path="/attendance/monthlysessions"
            component={withRouter(MonthlySessions)}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Attendance;
