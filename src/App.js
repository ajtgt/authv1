import React from "react";
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Attendance from './pages/attendance/Attendance';
import MyTargets from './pages/mytargets/MyTargets';
import TimeTable from './pages/timetable/TimeTable';
import Hospitalization from './pages/hospitalization/Hospitalization';
import HealthProfiles from './pages/healthprofiles/HealthProfiles';
import Statistics from './pages/statistics/Statistics';
import FitnessEvaluation from './pages/fitnessevaluation/FitnessEvaluation';
// import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Router >
        <Topbar />



        <div className="row">

          <div className="col-sm-3 ">
            <div>


              <Sidebar />


            </div>



          </div>
          <div className="col-sm-9 bg-info bg-opacity-25">

            <Switch>

              <Route exact path="/attendance" component={withRouter(Attendance)} >
              </Route>

              <Route exact path="/mytargets" component={withRouter(MyTargets)}>
              </Route>

              <Route exact path="/timetable" component={withRouter(TimeTable)}>

              </Route>

              <Route exact path="/hospitalization" component={withRouter(Hospitalization)}>

              </Route>

              <Route exact path="/healthprofiles" component={withRouter(HealthProfiles)}>

              </Route>

              <Route exact path="/fitnessevaluation" component={withRouter(FitnessEvaluation)}>

              </Route>

              <Route exact path="/statistics" component={withRouter(Statistics)}>

              </Route>
              {/* <Route exact path="/login" component={withRouter(Login)}>

              </Route> */}

              <Route exact path="/" component={withRouter(Dashboard)}>

              </Route>

            </Switch>

          </div>



        </div>
      </Router>
    </>

  );
}

export default App;










{/*       <Topbar />
            <div className="row">

              <div className="col-sm-3 ">
                <Sidebar />
              </div>

              <div className="col-sm-9">
                <div className="others"></div>
              </div>

            </div> */}