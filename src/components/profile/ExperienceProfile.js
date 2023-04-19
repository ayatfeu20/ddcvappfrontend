import React from "react";
import dayjs from 'dayjs'

const ExperienceProfile = (props) => {

  return (
    <div className="">
      <div className="mt-5 d-flex  justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="mt-5 mb-5 ps-5 pe-5 ">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <h6 className=" project-color mb-3">Experience</h6>
            </div>
            <div className="">
              {props.experience.length === 0 ? (
                <div className="d-flex justify-content-center justify-content-lg-start">
                  {" "}
                  <small className="project-color-grey ">
                    Go to Edit Page to add Experience
                  </small>
                </div>
              ) : (
                props.experience.map((exp) => {
                  return (
                    <div
                      key={exp.key_id}
                      className="m-0 p-0 row col-12 col-lg-9 d-flex justify-content-lg-start justify-content-center"
                    >
                      <h6 className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.designation}
                      </h6>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.companyname}
                      </p>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {dayjs(exp.startdate).format('DD/MM/YYYY')} - {dayjs(exp.enddate).format('DD/MM/YYYY')}
                      </p>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.companyname}
                      </p>
                      <p className="project-color-grey me-0 ms-0 mb-3 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.description}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceProfile;
