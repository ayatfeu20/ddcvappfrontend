import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const EducationComponent = (props) => {
  const [programState, setProgramState] = useState("");
  const [universityState, setUniversityState] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [editID, seteditID] = useState("");

  const programRef = useRef(null);
  const universityRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const descriptionRef = useRef(null);
  const pRef = useRef(null);
  const errorRef = useRef(null);
  const editRef = useRef(null);
  const addBtnRef = useRef(null);
  const scroll = useRef(null);

  const SaveProgramState = (e) => {
    setProgramState(e.target.value);
  };
  const SaveUniversityState = (e) => {
    setUniversityState(e.target.value);
  };
  const SaveStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const SaveEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const SaveDescriptionState = (e) => {
    setDescriptionState(e.target.value);
  };

  const addProject = (e) => {
    e.preventDefault();
    if (
      programState === "" &&
      universityState === "" &&
      StartDate === "" &&
      EndDate === "" &&
      descriptionState === ""
    ) {
      programRef.current.classList.add("validate");
      universityRef.current.classList.add("validate");
      startDateRef.current.classList.add("validate");
      endDateRef.current.classList.add("validate");
      descriptionRef.current.classList.add("validate");
      pRef.current.classList.add("d-none");
      errorRef.current.classList.add("d-block");
      errorRef.current.classList.remove("d-none");
    } else {
      props.EducationArray([
        ...props.educationState,
        {
          program: programState,
          universityname: universityState,
          startdate: StartDate,
          enddate: EndDate,
          description: descriptionState,
          key_id: uuidv4(),
        },
      ]);
      setProgramState("");
      setUniversityState("");
      setStartDate("");
      setEndDate("");
      setDescriptionState("");
    }
  };

  const editEducation = (e, edu) => {
    e.preventDefault();
    setProgramState(edu.program);
    setUniversityState(edu.universityname);
    setStartDate(edu.startdate);
    setEndDate(edu.enddate);
    setDescriptionState(edu.description);
    addBtnRef.current.classList.add("d-none");
    editRef.current.classList.add("d-block");
    editRef.current.classList.remove("d-none");
    seteditID(edu.key_id);
    programRef.current.classList.remove("validate");
    universityRef.current.classList.remove("validate");
    startDateRef.current.classList.remove("validate");
    endDateRef.current.classList.remove("validate");
    descriptionRef.current.classList.remove("validate");
    pRef.current.classList.remove("d-none");
    errorRef.current.classList.remove("d-block");
    errorRef.current.classList.add("d-none");
    scroll.scrollIntoView({ behavior: "smooth" });
  };

  const updateEducation = (e) => {
    e.preventDefault();
    if (
      programState === "" &&
      universityState === "" &&
      StartDate === "" &&
      EndDate === "" &&
      descriptionState === ""
    ) {
      programRef.current.classList.add("validate");
      universityRef.current.classList.add("validate");
      startDateRef.current.classList.add("validate");
      endDateRef.current.classList.add("validate");
      descriptionRef.current.classList.add("validate");
      pRef.current.classList.add("d-none");
      errorRef.current.classList.add("d-block");
      errorRef.current.classList.remove("d-none");
    } else {
      props.EducationArray([
        ...props.educationState.filter((x) => x.key_id !== editID),
        {
          program: programState,
          universityname: universityState,
          startdate: StartDate,
          enddate: EndDate,
          description: descriptionState,
          key_id: uuidv4(),
        },
      ]);
      setProgramState("");
      setUniversityState("");
      setStartDate("");
      setEndDate("");
      setDescriptionState("");
      addBtnRef.current.classList.remove("d-none");
      editRef.current.classList.remove("d-block");
      editRef.current.classList.add("d-none");
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    setProgramState("");
    setUniversityState("");
    setStartDate("");
    setEndDate("");
    setDescriptionState("");
    addBtnRef.current.classList.remove("d-none");
    editRef.current.classList.remove("d-block");
    editRef.current.classList.add("d-none");
  };

  const deleteEducation = (e, id) => {
    e.preventDefault();
    const updateProjectState = props.educationState.filter(
      (x) => x.key_id !== id
    );
    props.EducationArray(updateProjectState);
    programRef.current.classList.remove("validate");
    universityRef.current.classList.remove("validate");
    startDateRef.current.classList.remove("validate");
    endDateRef.current.classList.remove("validate");
    descriptionRef.current.classList.remove("validate");
    pRef.current.classList.remove("d-none");
    errorRef.current.classList.remove("d-block");
    errorRef.current.classList.add("d-none");
  };
  return (
    <div>
      <div className="mt-5 d-flex justify-content-center justify-content-md-end">
        <div className="profile card row">
          <div className="col mt-5 mb-5 d-flex flex-column flex-lg-row justify-content-end">
            <div className="col-12  d-flex flex-column mb-5 ">
              {props.educationState.map((edu) => {
                return (
                  <div key={edu.key_id}>
                    <div className="col-lg-4 col-12">
                      <div className="d-flex justify-content-lg-start justify-content-center">
                        <h6 className=" project-color mb-3 h6-start">
                          Education
                        </h6>
                      </div>
                    </div>
                    <form id="my-form">
                      <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                        <div className="col-md-5 col-12">
                          <div className=" inputField  mb-3 d-flex justify-content-center">
                            <input
                              name="program"
                              type="text"
                              className="-width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder=" "
                              defaultValue={edu.program}
                              readOnly
                            />
                            <span className="Input date">Program</span>
                          </div>
                        </div>
                        <div className="col-md-5 col-12">
                          <div className=" inputField  mb-3 d-flex justify-content-center">
                            <input
                              name="university"
                              type="text"
                              className="-width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              defaultValue={edu.universityname}
                              placeholder=" "
                              readOnly
                            />
                            <span className="company-name Input">
                              University Name
                            </span>
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
                              defaultValue={edu.startdate}
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
                              defaultValue={edu.enddate}
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
                              name="description"
                              type="text"
                              className="large-input col-10 -width input-style form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              defaultValue={edu.description}
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
                                deleteEducation(e, edu.key_id);
                              }}
                              className="btn border"
                            >
                              Delete{" "}
                              <i className="delete-project-x ms-2 fas fa-times"></i>
                            </button>
                            <button
                              onClick={(e) => {
                                editEducation(e, edu);
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
                    <h6 className=" project-color mb-3 h6-start">Education</h6>
                  </div>
                </div>
                <form id="my-form">
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-5 col-12">
                      <div
                        ref={programRef}
                        className=" inputField  mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="program"
                          type="text"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" "
                          onChange={SaveProgramState}
                          value={programState}
                        />
                        <span className="Input date">Program</span>
                      </div>
                    </div>
                    <div className="col-md-5 col-12">
                      <div
                        ref={universityRef}
                        className=" inputField  mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="uni"
                          type="text"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveUniversityState}
                          placeholder=" "
                          value={universityState}
                        />
                        <span className="company-name Input">
                          University Name
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-5 col-12">
                      <div
                        ref={startDateRef}
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
                        ref={endDateRef}
                        className=" inputField  mb-3 d-flex justify-content-center"
                      >
                        <input
                          name="enddate"
                          type="date"
                          className="-width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveEndDate}
                          placeholder=" "
                          value={EndDate}
                        />
                        <span className="date Input">End Date</span>
                      </div>
                    </div>
                  </div>
                  <div className="row col col-lg-8 col-12 m-0 d-flex flex-column flex-md-row justify-content-center">
                    <div className="col-md-10 col-12 ">
                      <div
                        ref={descriptionRef}
                        className="inputField  d-flex justify-content-center"
                      >
                        <input
                          name="description"
                          type="text"
                          className="large-input col-10 -width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={SaveDescriptionState}
                          placeholder=" "
                          value={descriptionState}
                        />
                        <span className="exp-desc Input-spec">Description</span>
                      </div>
                      {/* <hr className='hr-line mt-5'></hr> */}
                      <p ref={pRef} className="mb-3 project-color-grey">
                        Note: Don't forget to press save button to save your
                        changes!
                      </p>
                      <p
                        className="mb-3 error-message-color d-none"
                        ref={errorRef}
                      >
                        Note: You can't add an empty Education!
                      </p>
                      <button
                        ref={addBtnRef}
                        onClick={addProject}
                        className="pe-3 ps-3 btn add-btn"
                      >
                        +Add
                      </button>
                      <div
                        className="d-flex col-12 d-none justify-content-center justify-content-lg-start"
                        ref={editRef}
                      >
                        <button
                          onClick={(e) => {
                            updateEducation(e);
                          }}
                          className="pe-3 ps-3 btn add-btn"
                        >
                          Update
                        </button>
                        <button
                          onClick={(e) => {
                            goBack(e);
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

export default EducationComponent;
