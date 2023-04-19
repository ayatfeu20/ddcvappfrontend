import React from "react";

const TechnologiesProfile = (props) => {
  console.log("props technology",props)
  return (
    <div className="">
      <div className="mt-5 d-flex  justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="mt-5 mb-5 ps-5 pe-5 ">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <h6 className=" project-color mb-3 ">Technologies</h6>
            </div>
            {props.technologies.length === 0 ? (
              <div className="d-flex justify-content-center justify-content-lg-start">
                <small className="project-color-grey">
                  Go to Edit Page to add skill
                </small>
              </div>
            ) : null}
            <div className="row col-12 col-lg-9 row-cols-lg-5 row-cols-sm-3 row-cols-md-4 row-cols-1 g-2 d-flex justify-content-lg-start justify-content-center">
              {props.technologies.map((tech) => {
                return (
                  <div
                    key={tech._id}
                    className="p-1 tech-blue d-flex justify-content-center col m-1"
                  >
                    {tech.techtools}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesProfile;
