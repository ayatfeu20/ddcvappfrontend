import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeGrid = (props) => {
  return (
    <div className="">
      <div className="mt-5 d-flex justify-content-center justify-content-md-end">
        <div className="employee-page">
          <div className="">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 d-flex justify-content-md-start justify-content-center  ">
                {props.employeeState && props.employeeState.map((employee) => {
                  return (
                    <EmployeeCard key={employee._id} employee={employee} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeGrid;
