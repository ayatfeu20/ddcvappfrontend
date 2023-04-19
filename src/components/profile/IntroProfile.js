import React from "react";

const profile = ({
    profilepicture,
    employeename,
    designation,
    phonenumber,
    email,
    location,
    summary
     } ) => {
  
  return (
    <div className="">
      <div className="mt-5 d-flex justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="col">
            <div className="mt-5 mb-5 d-flex align-items-center flex-column flex-md-row justify-content-evenly col-lg-9 col-12  ">
              <div>
                <div className="pe-md-4 ps-md-4 profilepictureBig d-flex justify-content-center justify-content-md-start ">
                 
                  {profilepicture === null ? (
                    // <img className="no-picture" src={logo} alt="logo"/>
                    <i className="mb-4 mb-md-0  project-color no-pic fas fa-user-circle "></i>
                  ) : (
                    <img
                      className="mb-4 mb-md-0 img-responsive"
                      src={profilepicture}
                      alt="logo"
                    />
                  )}
                </div>
              </div>

              <div className="">
                {employeename === null || employeename === "" ? (
                  <h3 className="d-flex justify-content-center project-color justify-content-md-start">
                    Employee Name
                  </h3>
                ) : (
                  <h3 className="project-color d-flex justify-content-center  justify-content-md-start">
                    {employeename}
                  </h3>
                )}
              
                {designation === null || designation === "" ? (
                  <h5 className="d-flex justify-content-center  justify-content-md-start project-color-grey">
                    Designation
                  </h5>
                ) : (
                  <h5 className="d-flex justify-content-center  justify-content-md-start project-color-grey">
                    {designation}
                  </h5>
                )}
                {phonenumber === null || phonenumber === "" ? (
                  <p className="d-flex justify-content-center m-0  justify-content-md-start thicker-text">
                    Phone Number
                  </p>
                ) : (
                  <p className="d-flex justify-content-center  justify-content-md-start thicker-text m-0">
                    {phonenumber}
                  </p>
                )}
                <p className="d-flex justify-content-center  justify-content-md-start thicker-text m-0">
                  {email}
                </p>
                {location === null || location === "" ? (
                  <p className="d-flex justify-content-center m-0  justify-content-md-start thicker-text">
                    Location
                  </p>
                ) : (
                  <p className="d-flex justify-content-center justify-content-md-start thicker-text m-0">
                    {location}
                  </p>
                )}
                <p className="d-flex justify-content-center  justify-content-md-start thicker-text m-0">
                  {summary}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
