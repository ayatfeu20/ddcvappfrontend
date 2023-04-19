import {React,useState,useEffect} from "react";

import IntroProfile from "./IntroProfile";
import TechnologiesProfile from "./TechnologiesProfile";
import EducationProfile from "./EducationProfile"
import ExperienceProfile from "./ExperienceProfile"
import ProjectsProfile from "./ProjectsProfile"
import { useNavigate } from "react-router";

import FullHeight from "react-full-height";
import UserServices from "./../UserServices";
import FadeIn from "react-fade-in";
import { useParams } from "react-router-dom";
import Utils from "./../Utils"
import Pdf from "./../Pdf";
import Modal from 'react-modal';
import { RWebShare } from "react-web-share";


const EmployeePro = () => {
  let history = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const { _id } = useParams()

  useEffect(() => {
    async function retrieveUserData() {
      const userData = await UserServices.GetOneUser({_id: _id});
      setUserProfile(userData.data);
    }
    retrieveUserData();
    
  }, []);

  const redirectIfUserOrAdmin = () => {
    let firstPath = window.location.pathname.split('/')[1];
    return (firstPath==="admin" ? history('/admin/employee/' + _id +"/edit") : history('/employee/' + _id +"/edit"));
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  
  

  return (
    <div>
      {(userProfile===null||userProfile==undefined || Object.keys(userProfile).length === 0) ? (<div></div>) : (
      <FullHeight>
     
        <div className="container mb-5">
          <FadeIn>
            <div>
              <div className=" mt-5 d-flex justify-content-md-end justify-content-center">
                <div className="d-none d-md-block d-flex edit-info justify-content-md-between justify-content-start ">
                  <div className="d-flex justify-content-md-between justify-content-center edit-height d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="d-flex me-4 gap-3">
                        <button
                          className="btn save-button background-project-color"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={()=>{ redirectIfUserOrAdmin() } }>
                          <i className="me-2 far fa-edit"></i>Edit
                        </button>
                        <button
                          className="btn save-button background-project-color"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={()=>{ Utils.generatePDF(userProfile) }}>
                          <i className="me-2  far fa-circle-down"></i>PDF
                        </button>
                        <button
                          className="btn save-button background-project-color"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={openModal}>
                          <i className="me-2 far fa-file"></i>Preview
                        </button>
                        <RWebShare
        data={{
          text: "Here are the link of employee profile",
          url: ``,
          title: "Share",
        }}
        onClick={() => console.log("shared successfully!")}
      >
                        <button
                          className="btn save-button background-project-color"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                         >
                          <i className="me-2 far fa-envelope"></i>Share
                        </button>
                        </RWebShare>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="report">
                <IntroProfile
                profilepicture={userProfile.profilepicture}
                employeename={userProfile.employeename}
                designation={userProfile.designation}
                phonenumber={userProfile.phonenumber}
                email={userProfile.email}
                location={userProfile.location}
                summary = {userProfile.summary}                
                />
                <TechnologiesProfile technologies={userProfile.technologies}/>
                <ProjectsProfile projects={userProfile.projects}/>
                <ExperienceProfile experience={userProfile.experience}/>
                <EducationProfile education={userProfile.education}/>    
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal">
                    <Pdf profilepicture={userProfile.profilepicture}
                    firstname={userProfile.firstname} 
                    lastname={userProfile.lastname}
                    designation={ userProfile.designation}
                    phonenumber={userProfile.phonenumber}
                    email={userProfile.email}
                    summary={ userProfile.summary}
                    experience={userProfile.experience}
                    education={userProfile.education}
                    projects={userProfile.projects}
                    technologies={userProfile.technologies} />
                </Modal>
              </div>
            </div>
          </FadeIn>
        </div>
      </FullHeight>)}
    </div>
  );
}

export default EmployeePro;
