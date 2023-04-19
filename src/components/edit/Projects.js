import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import FadeIn from "react-fade-in";

const Projects = (props) => {
  const scrollRef = useRef(null);
  const addRef = useRef(null);
  const editRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputToolsRef = useRef(null);
  const inputStartDateRef = useRef(null);
  const inputEndDateRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const pRef = useRef(null);
  const errorRef = useRef(null);

  const inputName = inputNameRef.current;
  const inputTools = inputToolsRef.current;
  const inputStartDate = inputStartDateRef.current;
  const inputEndDate = inputEndDateRef.current;
  const inputDescription = inputDescriptionRef.current;
  const error = errorRef.current;
  const paragraph = pRef.current;
  const buttonAdd = addRef.current;
  const edit = editRef.current;

  const [projectName, setprojectName] = useState("");
  const [projectTools, setprojectTools] = useState("");
  const [projectStartDate, setprojectStartDate] = useState("");
  const [projectEndDate, setprojectEndDate] = useState("");
  const [projectDescription, setprojectDescription] = useState("");
  const [stateID, setStateID] = useState("");

  const SaveNameState = (e) => {
    setprojectName(e.target.value);
  };
  const SaveToolState = (e) => {
    setprojectTools(e.target.value);
  };
  const SaveStartDateState = (e) => {
    setprojectStartDate(e.target.value);
  };
  const SaveEndDateState = (e) => {
    setprojectEndDate(e.target.value);
  };
  const SaveDescriptionState = (e) => {
    setprojectDescription(e.target.value);
  };

  const deleteProject = (e, id) => {
    e.preventDefault();
    const updateProjectState = props.ProjectsArray.filter(
      (x) => x.key_id !== id
    );
    props.ProjArray(updateProjectState);
    paragraph.classList.remove("d-none");
    error.classList.remove("d-block");
    error.classList.add("d-none");
    inputName.classList.remove("validate");
    inputTools.classList.remove("validate");
    inputStartDate.classList.remove("validate");
    inputEndDate.classList.remove("validate");
    inputDescription.classList.remove("validate");
  };
  const editProject = (e, project) => {
    e.preventDefault();
    paragraph.classList.remove("d-none");
    error.classList.remove("d-block");
    error.classList.add("d-none");
    inputName.classList.remove("validate");
    inputTools.classList.remove("validate");
    inputStartDate.classList.remove("validate");
    inputEndDate.classList.remove("validate");
    inputDescription.classList.remove("validate");
    setprojectName(project.projectname);
    setprojectTools(project.tools);
    setprojectStartDate(project.startdate);
    setprojectEndDate(project.enddate);
    setprojectDescription(project.projectdescription);

    buttonAdd.classList.add("d-none");

    edit.classList.add("d-block");
    edit.classList.remove("d-none");
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
    setStateID(project.key_id);
  };

  const updateProject = (e) => {
    e.preventDefault();
    if (
      projectName === "" &&
      projectTools === "" &&
      projectStartDate === "" &&
      projectEndDate === "" &&
      projectDescription === ""
    ) {
      inputName.classList.add("validate");
      inputTools.classList.add("validate");
      inputStartDate.classList.add("validate");
      inputEndDate.classList.add("validate");
      inputDescription.classList.add("validate");

      paragraph.classList.add("d-none");

      error.classList.add("d-block");
      error.classList.remove("d-none");
    } else {
      props.ProjArray([
        ...props.ProjectsArray.filter((x) => x.key_id !== stateID),
        {
          projectname: projectName,
          tools: projectTools,
          startdate: projectStartDate,
          enddate: projectEndDate,
          projectdescription: projectDescription,
          key_id: uuidv4(),
        },
      ]);
      setprojectName("");
      setprojectTools("");
      setprojectStartDate("");
      setprojectEndDate("");
      setprojectDescription("");

      buttonAdd.classList.add("d-block");
      buttonAdd.classList.remove("d-none");

      edit.classList.add("d-none");
      edit.classList.remove("d-block");
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const addProject = (e) => {
    e.preventDefault();

    if (
      projectName === "" &&
      projectTools === "" &&
      projectStartDate === "" &&
      projectEndDate === "" &&
      projectDescription === ""
    ) {
      inputName.classList.add("validate");
      inputTools.classList.add("validate");
      inputStartDate.classList.add("validate");
      inputEndDate.classList.add("validate");
      inputDescription.classList.add("validate");

      paragraph.classList.add("d-none");

      error.classList.add("d-block");
      error.classList.remove("d-none");
    } else {
      paragraph.classList.remove("d-none");
      error.classList.remove("d-block");
      error.classList.add("d-none");
      inputName.classList.remove("validate");
      inputTools.classList.remove("validate");
      inputStartDate.classList.remove("validate");
      inputEndDate.classList.remove("validate");
      inputDescription.classList.remove("validate");

      props.ProjArray([
        ...props.ProjectsArray,
        {
          projectname: projectName,
          tools: projectTools,
          startdate: projectStartDate,
          enddate: projectEndDate,
          projectdescription: projectDescription,
          key_id: uuidv4(),
        },
      ]);
      setprojectName("");
      setprojectTools("");
      setprojectStartDate("");
      setprojectEndDate("");
      setprojectDescription("");
    }
  };
  const createNew = (e) => {
    e.preventDefault();
    paragraph.classList.remove("d-none");
    error.classList.remove("d-block");
    error.classList.add("d-none");
    inputName.classList.remove("validate");
    inputTools.classList.remove("validate");
    inputStartDate.classList.remove("validate");
    inputEndDate.classList.remove("validate");
    inputDescription.classList.remove("validate");
    setprojectName("");
    setprojectTools("");
    setprojectStartDate("");
    setprojectEndDate("");
    setprojectDescription("");
  };
  return (
    <div>
      <div className="mt-5 d-flex justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="col mt-5 mb-5 d-flex flex-column flex-lg-row justify-content-end">
            <div className="col-12  d-flex flex-column mb-5 ">
              <FadeIn>
                {props.ProjectsArray.map((project) => {
                  return (
                    <div key={project.key_id}>
                      <div className="mt-3 col-12 ">
                        <div className="d-flex justify-content-lg-start justify-content-center">
                          <h6 className="project-color mb-3 h6-start">
                            Projects
                          </h6>
                        </div>
                      </div>
                      <form id="my-form">
                        <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                          <div className="col-md-5 col-12">
                            <div className=" inputField  mb-3 d-flex justify-content-center">
                              <input
                                name="projectname"
                                type="text"
                                className="-width input-style form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder=" "
                                defaultValue={project.projectname}
                                readOnly
                              />
                              <span className="Input projectnameInput">
                                Project Name
                              </span>
                            </div>
                          </div>
                          <div className="col-md-5 col-12">
                            <div className=" inputField  mb-3 d-flex justify-content-center">
                              <input
                                name="projecttools"
                                type="text"
                                className="-width input-style form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                defaultValue={project.tools}
                                placeholder=" "
                                readOnly
                              />
                              <span className="emailInput Input">Tools</span>
                            </div>
                          </div>
                        </div>
                        <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                          <div className="col-md-5 col-12">
                            <div className=" inputField  mb-3 d-flex justify-content-center">
                              <input
                                name="startdate"
                                type="date"
                                className="-width input-style form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder=" "
                                defaultValue={project.startdate}
                                readOnly
                              />
                              <span className="Input date">Start Date</span>
                            </div>
                          </div>
                          <div className="col-md-5 col-12">
                            <div className=" inputField  mb-3 d-flex justify-content-center">
                              <input
                                name="enddate"
                                type="date"
                                className="-width input-style form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                defaultValue={project.enddate}
                                placeholder=" "
                                readOnly
                              />
                              <span className="date Input">End Date</span>
                            </div>
                          </div>
                        </div>
                        <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                          <div className="col-md-10 col-12 ">
                            <div className="inputField mb-3 d-flex justify-content-center">
                              <input
                                name="email"
                                type="email"
                                className="large-input col-10 -width input-style form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                defaultValue={project.projectdescription}
                                readOnly
                                placeholder=" "
                              />

                              <span className="project-desc Input-spec">
                                Project Description
                              </span>
                            </div>
                            <div className="d-flex align-items-center delete-project-x">
                              <button
                                onClick={(e) => {
                                  deleteProject(e, project.key_id);
                                }}
                                className="btn border me-1"
                              >
                                Delete{" "}
                                <i className="delete-project-x ms-2 fas fa-times"></i>
                              </button>
                              <button
                                onClick={(e) => {
                                  editProject(e, project);
                                }}
                                className="btn border ms-1"
                              >
                                Edit{" "}
                                <i className="delete-project-x ms-2 fas fa-pen"></i>
                              </button>
                            </div>
                            <hr className="hr-line mt-5"></hr>
                          </div>
                        </div>
                      </form>
                    </div>
                  );
                })}
              </FadeIn>
              {/* END OF MAP */}
              <div className="scrollRef" ref={scrollRef}>
                <div className=" col-12 mt-3">
                  <div className="d-flex justify-content-lg-start justify-content-center">
                    <h6 className=" project-color mb-3 h6-start">Projects</h6>
                  </div>
                </div>
                <form id="my-form">
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-5 col-12">
                      <div
                        className=" inputField mb-3 d-flex justify-content-center"
                        ref={inputNameRef}
                      >
                        <input
                          name="projectName"
                          type="text"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" "
                          onChange={SaveNameState}
                          value={projectName}
                        />
                        <span className="Input projectnameInput">
                          Project Name
                        </span>
                      </div>
                    </div>
                    <div className="col-md-5 col-12">
                      <div
                        className=" inputField  mb-3 d-flex justify-content-center"
                        ref={inputToolsRef}
                      >
                        <input
                          name="tools"
                          type="text"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveToolState}
                          placeholder=" "
                          value={projectTools}
                        />
                        <span className="emailInput Input">Tools</span>
                      </div>
                    </div>
                  </div>
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-5 col-12">
                      <div
                        className=" inputField  mb-3 d-flex justify-content-center"
                        ref={inputStartDateRef}
                      >
                        <input
                          name="startdate"
                          type="date"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" "
                          onChange={SaveStartDateState}
                          value={projectStartDate}
                        />
                        <span className="Input date">Start Date</span>
                      </div>
                    </div>
                    <div className="col-md-5 col-12">
                      <div
                        className=" inputField  mb-3 d-flex justify-content-center"
                        ref={inputEndDateRef}
                      >
                        <input
                          name="enddate"
                          type="date"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveEndDateState}
                          placeholder=" "
                          value={projectEndDate}
                        />
                        <span className="date Input">End Date</span>
                      </div>
                    </div>
                  </div>
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-10 col-12 ">
                      <div
                        className="inputField  d-flex justify-content-center"
                        ref={inputDescriptionRef}
                      >
                        <input
                          name="projectdescription"
                          type="text"
                          className="large-input col-10 -width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveDescriptionState}
                          placeholder=" "
                          value={projectDescription}
                        />
                        <span className="project-desc Input-spec">
                          Project Description
                        </span>
                      </div>
                      {/* <hr className='hr-line mt-5'></hr> */}
                      <p className="mb-3 project-color-grey" ref={pRef}>
                        Note: Don't forget to press save button to save your
                        changes!
                      </p>
                      <p
                        className="mb-3 error-message-color d-none"
                        ref={errorRef}
                      >
                        Note: You can't add an empty project!
                      </p>

                      <button
                        onClick={addProject}
                        ref={addRef}
                        className="pe-3 ps-3 btn add-btn"
                      >
                        +Add
                      </button>
                      {/* <button
                        onClick={updateProject}
                        ref={updateRef}
                        className="pe-3 ps-3 btn add-btn d-none"
                      >
                        Update
                      </button> */}
                      <div
                        className="d-flex col-12 d-none justify-content-center justify-content-lg-start"
                        ref={editRef}
                      >
                        <button
                          onClick={(e) => {
                            updateProject(e);
                          }}
                          className="pe-3 ps-3 btn add-btn"
                        >
                          Update
                        </button>
                        <button
                          onClick={(e) => {
                            createNew(e);
                          }}
                          className="pe-3 ps-3 btn add-btn ms-2"
                        >
                          Go back
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
