import React, { useState, useEffect } from "react";
import Introduction from "./Introduction";
import Technologies from "./Technologies";
import FullHeight from "react-full-height";
import Projects from "./Projects";
import Experience from "./Experience";
import EducationComponent from "./Education";
import UserServices from "../UserServices";
import FadeIn from "react-fade-in";
import { useParams } from "react-router-dom";

const EditCard = () => {
  //const userinfo = JSON.parse(localStorage.getItem("user"));

  const [userinfo, setUserInfo] = useState({});

  const { _id } = useParams();

  const [name, setname] = useState();
  const [picture, setPicture] = useState();
  const [Designation, setDesignation] = useState();
  const [Location, setLocation] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  
  let [technologies, setTechnologies] = useState([]);
  let [ProjectsArray, setProjectsArray] = useState([]);
  let [experienceState, setExperience] = useState([]);
  let [educationState, setEducationState] = useState([]);
  const [summary, setSummary] = useState("");
  useEffect(() => {
    async function retrieveUserData() {
      const userData = await UserServices.GetOneUser({ _id: _id });
      setUserInfo(userData.data);
      setTechnologies(...technologies, userData.data.technologies);
      setProjectsArray(...ProjectsArray, userData.data.projects);
      setExperience(...experienceState, userData.data.experience);
      setEducationState(...educationState, userData.data.education);
    }
    retrieveUserData();
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    const obj = {
      _id: _id,
      employeename: name,
      designation: Designation,
      location: Location,
      phonenumber: PhoneNumber,
      profilepicture: picture,
      technologies: technologies,
      projects: ProjectsArray,
      experience: experienceState,
      education: educationState,
      summary : summary
    };
    UserServices.editOnSave(obj);
  }

  return (
    <div>
      {userinfo === null ||
      userinfo == undefined ||
      Object.keys(userinfo).length === 0 ? (
        <div></div>
      ) : (
        <FullHeight>
          <div className="container mb-5">
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header ">
                    <h5
                      className="modal-title text-center"
                      id="exampleModalLabel"
                    >
                      Save your changes?{" "}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-start">
                    If you press save changes, your CV will be updated!
                  </div>
                  <div className="modal-footer d-flex justify-content-start">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      className="btn save-button background-project-color"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={handleSave}
                    >
                      <i className="me-2 far fa-save"></i>save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FadeIn>
                <div className=" mt-5 d-flex justify-content-md-end justify-content-center">
                  <h2 className="d-md-none">Edit CV</h2>
                  <div className="d-none d-md-block d-flex edit-info justify-content-md-between justify-content-start ">
                    <div className="d-flex justify-content-md-between justify-content-center edit-height d-flex align-items-center">
                      <div className="">
                        <h2>Edit CV</h2>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="me-4">
                          <button
                            className="btn save-button background-project-color"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={handleSave}
                          >
                            <i className="me-2 far fa-save"></i>save
                          </button>
                          {/* <p>Changes has been saved!</p> */}
                        </div>
                        <h1 className="me-4 project-color-grey line">|</h1>
                        <h2 className="name-text mb-0 me-4">
                          {userinfo.employeename}
                        </h2>
                        <i className="profile-icon project-color-grey fas fa-user-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <Introduction
                  userinfo={userinfo}
                  picture={picture}
                  changeName={(name) => setname(name)}
                  changePhone={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
                  changeLocation={(Location) => setLocation(Location)}
                  changeDesignation={(Designation) => setDesignation(Designation)}
                  saveprofilePicture={(picture) => setPicture(picture)}
                  changeSummary={(des) => setSummary(des)}
                />
                <Technologies
                  technologies={technologies}
                  TechArray={(technologies) => setTechnologies(technologies)}
                />
                <Projects
                  ProjectsArray={ProjectsArray}
                  ProjArray={(ProjectsArray) => setProjectsArray(ProjectsArray)}
                />
                <Experience
                  experience={experienceState}
                  ExperienceArray={(experience) => setExperience(experience)}
                />
                <EducationComponent
                  educationState={educationState}
                  EducationArray={(educationState) => setEducationState(educationState)              }
                />

                <div className="d-md-none d-flex justify-content-center mt-3 ">
                  <button
                    className="btn btn-block save-button-large background-project-color  pe-5 ps-5"
                    data-bs-target="#exampleModal"
                    data-bs-toggle="modal"
                  >
                    <i className="me-2 far fa-save"></i>save
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </FullHeight>
      )}
    </div>
  );
};

export default EditCard;
