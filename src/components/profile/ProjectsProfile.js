import React from "react";
import dayjs from "dayjs"

const ProjectsProfile = (props) => {
  return (
    <div className="">
      <div className="mt-5 d-flex  justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="mt-5 mb-5 ps-5 pe-5 ">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <h6 className=" project-color mb-3">Projects</h6>
            </div>
            <div className="">
              {props.projects.length === 0 ? (
                <div className="d-flex justify-content-center justify-content-lg-start">
                  {" "}
                  <small className="project-color-grey ">
                    Go to Edit Page to add Projects
                  </small>
                </div>
              ) : (
                props.projects.map((project) => {
                  return (
                    <div
                      key={project.key_id}
                      className="m-0 p-0 row col-12 col-lg-9 d-flex justify-content-lg-start justify-content-center"
                    >
                      <h6 className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {project.projectname}
                      </h6>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {project.tools}
                      </p>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {dayjs(project.startdate).format('DD/MM/YYYY')} - {dayjs(project.enddate).format('DD/MM/YYYY')}
                      </p>
                      <p className="project-color-grey me-0 ms-0 mb-3 p-0 d-flex justify-content-lg-start text-left justify-content-center">
                        {project.projectdescription}
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

export default ProjectsProfile;
