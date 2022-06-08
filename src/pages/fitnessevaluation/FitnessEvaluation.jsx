import React from "react";

const FitnessEvaluation = () => {
  return (
    <div>
      <div className="container bg-light rounded mt-5">
        <div className="header">
          <h4>Fitness Analytics</h4>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">Regular Sessions</div>
            <div class="col">Monthly Sessions</div>
            <div class="col">Missed Sessions</div>
          </div>

          <div class="container d-flex justify-content-center">
            <div className="row ">
              <div class="col ">
                <div class="row">Select Year:</div>
                <div class="row">
                  <div class="dropdown">
                    <button type="button" class="btn btn-success">
                      Success
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessEvaluation;
