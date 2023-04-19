import React from "react";

const EducationProfile = (props) => {
  

  return (
    <div className="">
      <div className="mt-5 d-flex  justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="mt-5 mb-5 ps-5 pe-5 ">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <h6 className=" project-color mb-3">Education</h6>
            </div>
            <div className="">
              {props?.education?.length === 0 ? (
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <small className="project-color-grey ">
                    Go to Edit Page to add Education
                  </small>
                </div>
              ) : (
                props.education.map((edu) => {
                  return (
                    <div
                      key={edu.key_id}
                      className="m-0 p-0 row col-12 col-lg-9 d-flex justify-content-lg-start justify-content-center"
                    >
                      <h6 className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {edu.program}
                      </h6>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {edu.universityname}
                      </p>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {edu.startdate} - {edu.enddate}
                      </p>
                      <p className="project-color-grey me-0 ms-0 mb-3 p-0 d-flex justify-content-lg-start justify-content-center">
                        {edu.description}
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

export default EducationProfile;
