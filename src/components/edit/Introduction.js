import React from "react";
import {useState} from "react";
import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Introduction = (props) => {
  const [profilepicture, setProfilePicture] = useState(null);
  const userinfo = props.userinfo;

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
     
  
    if (uploadTask) {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          console.log("Error uploading image:", error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setProfilePicture(url);
          props.saveprofilePicture(url);
        }
      );
    } else {
      console.log("Error creating upload task");
    }
       
  };
  

  const removePicture = (e) => {
    e.preventDefault();
    props.saveprofilePicture();
  };
  const deleteDatabasePicture = (e) => {
    e.preventDefault();
    props.saveprofilePicture(null);
  };

  return (
    <div>
      <div className="mt-5 d-flex justify-content-center justify-content-md-end">
        <div className="profile card row ">
          <div className=" col mt-5 mb-5 d-flex justify-content-md-evenly justify-content-center flex-column flex-lg-row">
            <div className="col-lg-4 col-12">
              <div className="profilepictureBig mt-lg-4 d-flex justify-content-center">
                {props.picture ? (
                  <div className="image d-flex justify-content-center">
                    <img
                      className="image-edit"
                      src={props.picture}
                      alt=""
                      onClick={removePicture}
                    />
                    <i
                      className="fas fa-trash-alt overlay-edit"
                      onClick={removePicture}
                    ></i>
                  </div>
                ) : userinfo.profilepicture === null ||
                  props.picture === null ? (
                  <i className="project-color no-pic fas fa-user-circle"></i>
                ) : (
                  <div className="image d-flex justify-content-center">
                    <img
                      className="img-responsive image-edit"
                      src={userinfo.profilepicture}
                      alt=""
                    />
                    <i
                      className="fas fa-trash-alt overlay-edit"
                      onClick={deleteDatabasePicture}
                    ></i>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-center">
              <label
                  className="mt-4 thicker-text project-color pointer upload"
                  htmlFor="upload-photo"
                >
                  Upload Photo
                </label>
              
                <input
                  type="file"
                  id="upload-photo"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleImageChange}
                  value=""
                />
                
              </div>
            </div>
            <form className="col-lg-8 col-12 mt-5 mt-lg-0" id="my-form">
              <h6 className="project-color d-flex justify-content-center justify-content-lg-start p-2">
                Introduction
              </h6>
              <div className="d-md-flex justify-content-center justify-content-lg-start">
                <div className="me-md-4">
                  <div className="inputField mb-3 d-flex justify-content-center">
                    <input
                      onChange={(e) => props.changeName(e.target.value)}
                      name="name"
                      type="tel"
                      pattern="[0-9]"
                      className="-width input-style form-control"
                      id="exampleInputEmail1"
                      placeholder=" "
                      defaultValue={userinfo.employeename}
                      maxLength={20}
                    />
                    <span className="nameInput Input">Name</span>
                  </div>
                  <div className="inputField  mb-3 d-flex justify-content-center">
                    <input
                      name="designation"
                      type="text"
                      className="-width input-style form-control"
                      id="exampleInputEmail1"
                      placeholder=" "
                      onChange={(e) => props.changeDesignation(e.target.value)}
                      defaultValue={userinfo.designation}
                    />
                    <span className="Input designationInput">Designation</span>
                  </div>
                  <div className="inputField mb-3 d-flex justify-content-center">
                    <input
                      name="location"
                      type="text"
                      className="-width input-style form-control"
                      id="exampleInputEmail1"
                      placeholder=" "
                      onChange={(e) => props.changeLocation(e.target.value)}
                      defaultValue={userinfo.location}
                    />
                    <span className="Input locationInput">Location</span>
                  </div>
                  <div className="col-md-10 col-12 ">
                    <div className="inputField  d-flex justify-content-center">
                        <input
                          name="summary"
                          type="text"
                          className="large-input col-10 -width input-style form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=" "
                          defaultValue={userinfo.summary}
                          onChange={(e) => props.changeSummary(e.target.value)}
                        />
                        <span className="project-desc Input-spec">
                          Professional Summary
                        </span>
                      </div></div>
                </div>
                <div className="me-md-4">
                  <div className="inputField mb-3 d-flex justify-content-center">
                    <input
                      name="phonenumber"
                      type="text"
                      className="-width input-style form-control"
                      id="exampleInputEmail1"
                      placeholder=" "
                      onChange={(e) => props.changePhone(e.target.value)}
                      defaultValue={userinfo.phonenumber}
                    />
                    <span className="Input phoneInput">Phone Number</span>
                  </div>
                  <div className="inputField mb-3 d-flex justify-content-center">
                    <input
                      name="email"
                      type="email"
                      className="-width input-style form-control"
                      id="exampleInputEmail1"
                      placeholder=" "
                      defaultValue={userinfo.email}
                      disabled
                    />
                    <span className="emailInput Input">E-mail</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
