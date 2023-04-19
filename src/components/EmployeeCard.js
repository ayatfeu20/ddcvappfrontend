import React from "react";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";

const employeeCard = (props) => {
  return (
    <FadeIn>
      <NavLink
        to={`/admin/employee/${props.employee._id}`}
        exact="true"
        className="remove-underline"
      >
        <div className="employee-card card col hover-card mt-3  pt-4">
          <div className="profilepicture d-flex justify-content-center">
            {props.employee.profilepicture === null ||
            props.employee.profilepicture === "" ? (
              <i className="project-color no-pic fas fa-user-circle"></i>
            ) : (
              <img
                className="img-resonsive"
                src={props.employee.profilepicture}
                alt="logo"
              />
            )}
          </div>
          <div className="mt-3 d-flex flex-column justify-content-center">
            <h6 className="d-flex justify-content-center project-color">
              {props.employee.employeename}
            </h6>

            {props.employee.designation === null ||
            props.employee.designation === "" ? (
              <p className="d-flex justify-content-center project-color-grey">
                Designation
              </p>
            ) : (
              <p className="d-flex justify-content-center project-color-grey">
                {props.employee.designation}
              </p>
            )}
          </div>
        </div>
      </NavLink>
    </FadeIn>
  );
};

export default employeeCard;
