import React from "react";
// import { Nav, Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Attendance from "../../pages/attendance/Attendance";
import MyTargets from "../../pages/mytargets/MyTargets";
import TimeTable from "../../pages/timetable/TimeTable";
import Hospitalization from "../../pages/hospitalization/Hospitalization";
import HealthProfiles from "../../pages/healthprofiles/HealthProfiles";
import Statistics from "../../pages/statistics/Statistics";
import FitnessEvaluation from "../../pages/fitnessevaluation/FitnessEvaluation";

const Sidebar = () => {
  return (
    <div class="container overflow-hidden">
      <div class="col gy-2 mt-5 ">
        <div class="d-flex py-2 ">
          <img
            src="http://sams-ttipl.ddns.net/images/dashboard.png"
            alt="dashboard"
            width="25"
            height="25"
          ></img>
          <Link to="/">Dashboard</Link>
        </div>

        <div class="d-flex py-2">
          <img
            src="http://sams-ttipl.ddns.net/images/target.png"
            alt="dashboard"
            width="25"
            height="25"
          ></img>
          <Link to="/mytargets">My Targets</Link>
        </div>

        <div class="d-flex py-2">
          <img
            src="http://sams-ttipl.ddns.net/images/attendance.png"
            alt="dashboard"
            width="25"
            height="25"
          ></img>
          <Link to="/attendance">Attendance</Link>
        </div>

        <div class="d-flex py-2">
          <img
            src="http://sams-ttipl.ddns.net/images/timetable.png"
            alt="dashboard"
            width="25"
            height="25"
          ></img>
          <Link to="/timetable">Timetable</Link>
        </div>

        <div class="d-flex py-2">
          <img
            src="http://sams-ttipl.ddns.net/images/hospital.png"
            alt="dashboard"
            width="25"
            height="25"
          ></img>
          <Link to="/hospitalization">Hospitalization</Link>
        </div>

        <div class="d-flex py-2">
          <img
            src="http://sams-ttipl.ddns.net/images/healthprofiles.png"
            width="25"
            height="25"
          ></img>
          <Link to="/healthprofiles">Health Profiles</Link>
        </div>

        <div class="d-flex py-2">
          <img
            src="http://sams-ttipl.ddns.net/images/running.png"
            alt="dashboard"
          ></img>
          <Link to="/fitnessevaluation">Fitness Evaluation</Link>
        </div>

        <div class="d-flex py-2">
          <img
            src="http://sams-ttipl.ddns.net/images/statistics.png"
            alt="dashboard"
          ></img>
          <Link to="/statistics">Statistics</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/attendance">
            <Attendance />
          </Route>
          <Route path="/mytargets">
            <MyTargets />
          </Route>
          <Route path="/timetable">
            <TimeTable />
          </Route>
          <Route path="/hospitalization">
            <Hospitalization />
          </Route>
          <Route path="/healthprofiles">
            <HealthProfiles />
          </Route>
          <Route path="/fitnessevaluation">
            <FitnessEvaluation />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
        </Switch> */
}

// <aside className="app-sidebar bg-secondary ">
//   <div className="col">
//     <div className="row">
//       <Link to="/">Dasboard</Link>
//     </div>

//     <div className="row">
//       <Link to="/mytargets">My Targets</Link>
//     </div>

//     <div className="row">
//       <Link to="/attendance">Attendance</Link>
//     </div>

//     <div className="row">
//       <Link to="/timetable">Timetable</Link>
//     </div>

//     <div className="row">
//       <Link to="/hospitalization">Hospitalization</Link>
//     </div>

//     <div className="row">
//       <Link to="/healthprofiles">Health Profiles</Link>
//     </div>

//     <div className="row">
//       <Link to="/fitnessevaluation">Fitness Evaluation</Link>
//     </div>

//     <div className="row">
//       <Link to="/statistics">Statistics</Link>
//     </div>
//   </div>

// </aside>

// <div class="container overflow-hidden">
//   <div class="col gy-3">
//     <div class="row">
//       <div class="p-3 bg-light">
//         <Link to="/">Dashboard</Link>
//       </div>
//     </div>
//     <div class="row">
//       <div class="p-3 bg-light">
//         <Link to="/mytargets">My Targets</Link>
//       </div>
//     </div>
//     <div class="row">
//       <div class="p-3 bg-light">
//         <Link to="/attendance">Attendance</Link>
//       </div>
//     </div>
//     <div class="row">
//       <div class="p-3 bg-light">
//         <Link to="/timetable">Timetable</Link>
//       </div>
//     </div>
//     <div class="row">
//       <div class="p-3 bg-light">
//         <Link to="/hospitalization">Hospitalization</Link>
//       </div>
//     </div>
//     <div class="row">
//       <div class="p-3 bg-light">
//         <Link to="/healthprofiles">Health Profiles</Link>
//       </div>
//     </div>
//     <div class="row">
//       <div class="p-3 bg-light">
//         {" "}
//         <Link to="/fitnessevaluation">Fitness Evaluation</Link>
//       </div>
//     </div>
//     <div class="row">
//       <div class="p-3 bg-light">
//         <Link to="/statistics">Statistics</Link>
//       </div>
//     </div>
//   </div>
// </div>;
