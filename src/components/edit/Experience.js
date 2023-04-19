import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const ExperienceComponent = (props) => {
  const [Designation, setDesignation] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [Tool, setTool] = useState("");
  const [Description, setDescription] = useState("");
  const [editId, setEditId] = useState("");

  const inputDesignationRef = useRef(null);
  const inputCompanyNameRef = useRef(null);
  const inputStartDateRef = useRef(null);
  const inputEndDateRef = useRef(null);
  const inputToolRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const pRef = useRef(null);
  const errorRef = useRef(null);
  const editRef = useRef(null);
  const addRef = useRef(null);
  const scroll = useRef(null);

  const SaveDesignation = (e) => {
    setDesignation(e.target.value);
  };
  const SaveCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const SaveStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const SaveEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const SaveTool = (e) => {
    setTool(e.target.value);
  };
  const SaveDescription = (e) => {
    setDescription(e.target.value);
  };

  const addProject = (e) => {
    e.preventDefault();
    if (
      Designation === "" &&
      CompanyName === "" &&
      StartDate === "" &&
      EndDate === "" &&
      Tool === "" &&
      Description === ""
    ) {
      inputDesignationRef.current.classList.add("validate");
      inputCompanyNameRef.current.classList.add("validate");
      inputStartDateRef.current.classList.add("validate");
      inputEndDateRef.current.classList.add("validate");
      inputDescriptionRef.current.classList.add("validate");
      inputToolRef.current.classList.add("validate");
      errorRef.current.classList.add("d-block");
      errorRef.current.classList.remove("d-none");
      pRef.current.classList.add("d-none");
    } else {
      inputDesignationRef.current.classList.remove("validate");
      inputCompanyNameRef.current.classList.remove("validate");
      inputStartDateRef.current.classList.remove("validate");
      inputEndDateRef.current.classList.remove("validate");
      inputDescriptionRef.current.classList.remove("validate");
      inputToolRef.current.classList.remove("validate");
      errorRef.current.classList.remove("d-block");
      errorRef.current.classList.add("d-none");
      pRef.current.classList.remove("d-none");
      props.ExperienceArray([
        ...props.experience,
        {
          designation: Designation,
          companyname: CompanyName,
          startdate: StartDate,
          enddate: EndDate,
          tools: Tool,
          description: Description,
          key_id: uuidv4(),
        },
      ]);
      setDesignation("");
      setCompanyName("");
      setStartDate("");
      setEndDate("");
      setTool("");
      setDescription("");
    }
  };

  const deleteProject = (e, id) => {
    e.preventDefault();
    const updateExperienceState = props.experience.filter(
      (x) => x.key_id !== id
    );
    props.ExperienceArray(updateExperienceState);
    inputDesignationRef.current.classList.remove("validate");
    inputCompanyNameRef.current.classList.remove("validate");
    inputStartDateRef.current.classList.remove("validate");
    inputEndDateRef.current.classList.remove("validate");
    inputDescriptionRef.current.classList.remove("validate");
    inputToolRef.current.classList.remove("validate");
    errorRef.current.classList.remove("d-block");
    errorRef.current.classList.add("d-none");
    pRef.current.classList.remove("d-none");
  };
  const editExperience = (e, experience) => {
    e.preventDefault();
    inputDesignationRef.current.classList.remove("validate");
    inputCompanyNameRef.current.classList.remove("validate");
    inputStartDateRef.current.classList.remove("validate");
    inputEndDateRef.current.classList.remove("validate");
    inputDescriptionRef.current.classList.remove("validate");
    inputToolRef.current.classList.remove("validate");
    errorRef.current.classList.remove("d-block");
    errorRef.current.classList.add("d-none");
    pRef.current.classList.remove("d-none");
    editRef.current.classList.add("d-block");
    editRef.current.classList.remove("d-none");
    addRef.current.classList.add("d-none");
    setDesignation(experience.designation);
    setCompanyName(experience.companyname);
    setStartDate(experience.startdate);
    setEndDate(experience.enddate);
    setTool(experience.tools);
    setDescription(experience.description);
    setEditId(experience.key_id);
  };
  const updateExperience = (e) => {
    e.preventDefault();
    if (
      Designation === "" &&
      CompanyName === "" &&
      StartDate === "" &&
      EndDate === "" &&
      Tool === "" &&
      Description === ""
    ) {
      inputDesignationRef.current.classList.add("validate");
      inputCompanyNameRef.current.classList.add("validate");
      inputStartDateRef.current.classList.add("validate");
      inputEndDateRef.current.classList.add("validate");
      inputDescriptionRef.current.classList.add("validate");
      inputToolRef.current.classList.add("validate");
      errorRef.current.classList.add("d-block");
      errorRef.current.classList.remove("d-none");
      pRef.current.classList.add("d-none");
    } else {
      props.ExperienceArray([
        ...props.experience.filter((x) => x.key_id !== editId),
        {
          designation: Designation,
          companyname: CompanyName,
          startdate: StartDate,
          enddate: EndDate,
          tools: Tool,
          description: Description,
          key_id: uuidv4(),
        },
      ]);
      setDesignation("");
      setCompanyName("");
      setStartDate("");
      setEndDate("");
      setTool("");
      setDescription("");
      editRef.current.classList.remove("d-block");
      editRef.current.classList.add("d-none");
      addRef.current.classList.remove("d-none");
      addRef.current.classList.add("d-block");
    }
  };

  const createNew = (e) => {
    e.preventDefault();
    setDesignation("");
    setCompanyName("");
    setStartDate("");
    setEndDate("");
    setTool("");
    setDescription("");
    setEditId("");
    editRef.current.classList.remove("d-block");
    editRef.current.classList.add("d-none");
    addRef.current.classList.remove("d-none");
    addRef.current.classList.add("d-block");
  };
  return (
    <div>
      <div className="mt-5 d-flex justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="col mt-5 mb-5 d-flex flex-column flex-lg-row justify-content-end">
            <div className="col-12  d-flex flex-column mb-5 ">
              {props.experience.map((exp) => {
                return (
                  <div key={exp.key_id}>
                    <div className="col-lg-4 col-12">
                      <div className="d-flex justify-content-lg-start justify-content-center">
                        <h6 className=" project-color mb-3 h6-start">
                          Experience
                        </h6>
                      </div>
                    </div>
                    <form id="my-form">
                      <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                        <div className="col-md-5 col-12">
                          <div className=" inputField  mb-3 d-flex justify-content-center">
                            <input
                              name="designation"
                              type="text"
                              className="-width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder=" "
                              defaultValue={exp.designation}
                              readOnly
                            />
                            <span className="Input designationInput">
                              Designation
                            </span>
                          </div>
                        </div>
                        <div className="col-md-5 col-12">
                          <div className=" inputField  mb-3 d-flex justify-content-center">
                            <input
                              name="companyname"
                              type="text"
                              className="-width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              defaultValue={exp.companyname}
                              placeholder=" "
                              readOnly
                            />
                            <span className="company-name Input">
                              Company Name
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                        <div className="col-md-5 col-12">
                          <div className=" inputField  mb-3 d-flex justify-content-center">
                            <input
                              name="startdate"
                              type="text"
                              className="-width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder=" "
                              defaultValue={exp.startdate}
                              readOnly
                            />
                            <span className="Input date">Start Date</span>
                          </div>
                        </div>
                        <div className="col-md-5 col-12">
                          <div className=" inputField  mb-3 d-flex justify-content-center">
                            <input
                              name="enddate"
                              type="text"
                              className="-width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              defaultValue={exp.enddate}
                              placeholder=" "
                              readOnly
                            />
                            <span className="date Input">End Date</span>
                          </div>
                        </div>
                      </div>

                      <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-around">
                        <div className="col-md-10 col-12">
                          <div className=" inputField mb-3 d-flex justify-content-center">
                            <input
                              name="tools"
                              type="text"
                              className="-width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder=" "
                              defaultValue={exp.tools}
                              readOnly
                            />
                            <span className="Input emailInput">Tools</span>
                          </div>
                        </div>
                      </div>

                      <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                        <div className="col-md-10 col-12 ">
                          <div className="inputField mb-3 d-flex justify-content-center">
                            <input
                              name="description"
                              type="text"
                              className="large-input col-10 -width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              defaultValue={exp.description}
                              readOnly
                              placeholder=" "
                            />

                            <span className="exp-desc Input-spec">
                              Description
                            </span>
                          </div>
                          <div className="d-flex align-items-center delete-project-x">
                            <button
                              onClick={(e) => {
                                deleteProject(e, exp.key_id);
                              }}
                              className="btn border"
                            >
                              Delete{" "}
                              <i className="delete-project-x ms-2 fas fa-times"></i>
                            </button>
                            <button
                              onClick={(e) => {
                                editExperience(e, exp);
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

              {/* END OF MAP */}
              <div className="scrollRef" ref={scroll}>
                <div className="col-lg-4 col-12">
                  <div className="d-flex justify-content-lg-start justify-content-center">
                    <h6 className=" project-color mb-3 h6-start">Experience</h6>
                  </div>
                </div>
                <form id="my-form">
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-5 col-12">
                      <div
                        ref={inputDesignationRef}
                        className=" inputField  mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="Designation"
                          type="text"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" "
                          onChange={SaveDesignation}
                          value={Designation}
                        />
                        <span className="Input designationInput">
                          Designation
                        </span>
                      </div>
                    </div>
                    <div className="col-md-5 col-12">
                      <div
                        ref={inputCompanyNameRef}
                        className=" inputField  mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="Companyname"
                          type="text"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveCompanyName}
                          placeholder=" "
                          value={CompanyName}
                        />
                        <span className="company-name Input">Company Name</span>
                      </div>
                    </div>
                  </div>
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-5 col-12">
                      <div
                        ref={inputStartDateRef}
                        className=" inputField  mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="startdate"
                          type="date"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" "
                          onChange={SaveStartDate}
                          value={StartDate}
                        />
                        <span className="Input date">Start Date</span>
                      </div>
                    </div>
                    <div className="col-md-5 col-12">
                      <div
                        ref={inputEndDateRef}
                        className=" inputField  mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="enddate"
                          type="date"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveEndDate}
                          value={EndDate}
                          placeholder=" "
                        />
                        <span className="date Input">End Date</span>
                      </div>
                    </div>
                  </div>
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-around">
                    <div className="col-md-10 col-12">
                      <div
                        ref={inputToolRef}
                        className=" inputField mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="tools"
                          type="text"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" "
                          onChange={SaveTool}
                          value={Tool}
                        />
                        <span className="Input emailInput">Tools</span>
                      </div>
                    </div>
                  </div>
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-10 col-12 ">
                      <div
                        ref={inputDescriptionRef}
                        className="inputField  d-flex justify-content-center"
                      >
                        <input
                          name="description"
                          type="text"
                          className="large-input col-10 -width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveDescription}
                          placeholder=" "
                          value={Description}
                        />
                        <span className="exp-desc Input-spec">Description</span>
                      </div>

                      <p ref={pRef} className="mb-3 project-color-grey">
                        Note: Don't forget to press save button to save your
                        changes!
                      </p>
                      <p
                        className="mb-3 error-message-color d-none"
                        ref={errorRef}
                      >
                        Note: You can't add an empty Experience!
                      </p>

                      <button
                        onClick={addProject}
                        className="pe-3 ps-3 btn add-btn"
                        ref={addRef}
                      >
                        +Add
                      </button>

                      <div
                        className="d-flex col-12 d-none justify-content-center justify-content-lg-start"
                        ref={editRef}
                      >
                        <button
                          onClick={(e) => {
                            updateExperience(e);
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

export default ExperienceComponent;
