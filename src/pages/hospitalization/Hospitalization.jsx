import React from "react";

const Hospitalization = () => {
  return (
    <div className="container bg-light m-5 rounded">
      <div className="header p-4">
        <h4>
          <b>Hospitalization</b>
        </h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">Prescriptions</div>
          <div class="col">Discharge Summary</div>
          <div class="col">Reports</div>
          <div class="col">Sick/Injury Report</div>
        </div>

        <div class="container d-flex justify-content-center">
          <div className="row">
            <div class="col">
              <div class="row">Medical Examination</div>
              <div class="row">You dont have any Prescription record.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitalization;
