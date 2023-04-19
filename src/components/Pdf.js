import { React } from "react";
import dayjs from "dayjs"
import logo from "../images/namnlös1.png";
import "./Pdf.css";

const Pdf = (props) => {
    
  return (
    <div id="containerpdf">
      <div className="header container">
        <img
         src={logo}
          alt="dd-logo"
          className="logo "
          height="100px"
          width="140px"
          
        />
        <div className="full-name ">
          <span className="first-name">{props.firstname} </span>
          <br />
          <span className="last-name">{props.lastname}</span>
          <div className="info">
          <span className="designation">{props.designation}</span><br/>
          <span className="email">{props.email}</span><br/>
          <span className="phone-number">{props.phonenumber}</span><br/>
          
          </div>
          
        </div>
        <span className="desc text-left">
          {props.summary}
        </span>
        <img
          className="avatar "
          src={props.profilepicture}
          alt="avatar"
          height="200px"
          width ="200px"
        />
      </div>

      <div class="section__title">Technologies</div>
      <div className="">
      
        
          
           
            {props.technologies.length === 0 ? (
              <div className="d-flex justify-content-center justify-content-lg-start">
                <small className="project-color-grey">
                  Go to Edit Page to add skill
                </small>
              </div>
            ) : null}
            <div className="row col-12 col-lg-12 row-cols-lg-5 row-cols-sm-3 row-cols-md-4 row-cols-1 g-2 d-flex justify-content-lg-start justify-content-center">
              {props.technologies.map((tech) => {
                return (
                  <div
                    key={tech._id}
                    className="p-1 tech-blue d-flex justify-content-center col m-16 pr-2 "
                  >
                    {tech.techtools}
                  </div>
                );
              })}
            </div>
          
       
      
    </div>



     

      <div className="details">
      <div className="section">
        <div className="section__title">Experience</div>
        
              {props.experience.length === 0 ? (
                <div className="d-flex justify-content-center justify-content-lg-start">
                  {" "}
                  <small className="project-color-grey ">
                    Go to Edit Page to add Experience
                  </small>
                </div>
              ) : (
                props.experience.map((exp) => {
                  return (
                    
                    <div
                      key={exp.key_id}
                      className="m-0 p-0 row col-12 col-lg-9 d-flex justify-content-lg-start justify-content-center"
                    >
                       <div className="section__list">
        <div class="section__list-item">
                      <div className="left">
                      <h6 className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.designation}
                      </h6>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.companyname}
                      </p>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {dayjs(exp.startdate).format('DD/MM/YYYY')} - {dayjs(exp.enddate).format('DD/MM/YYYY')}
                      </p>
                      </div>
                    <div className="right">
                    <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.companyname}
                      </p>
                      <p className="project-color-grey me-0 ms-0 mb-3 p-0 d-flex justify-content-lg-start justify-content-center">
                        {exp.description}
                      </p>
                    </div></div></div>
                    
                    
                    </div>
                  );
                })
              )}
              </div>
            </div>
            
            <div className="details">
            <div className="section">
            <div className="section__title">Education</div>
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
                       <div className="section__list">
        <div class="section__list-item">
                      <div className="left">
                      <h6 className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                         {edu.universityname}
                      </h6>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {dayjs(edu.startdate).format('DD/MM/YYYY')} - {dayjs(edu.enddate).format('DD/MM/YYYY')}
                      </p>
                      </div>
                      <div className="right">
                      <h6 className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {edu.program} 
                      </h6>
                    
                    
                      <p className="project-color-grey me-0 ms-0 mb-3 p-0 d-flex justify-content-lg-start text-left justify-content-center">
                        {edu.description}
                      </p></div></div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            </div>

            
            <div className="details">
            <div className="section">
            <div class="section__title">Projects</div>
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
                       <div className="section__list">
        <div class="section__list-item">
                      <div className="left">
                      <h6 className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {project.projectname}
                      </h6>
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {dayjs(project.startdate).format('DD/MM/YYYY')} - {dayjs(project.enddate).format('DD/MM/YYYY')}
                      </p>

                      </div>
                      <div className="right">
                      <p className="m-0 p-0 d-flex justify-content-lg-start justify-content-center">
                        {project.tools}
                      </p>
                    
                      <p className="project-color-grey me-0 ms-0 mb-3 p-0 d-flex justify-content-lg-start text-left justify-content-left">
                        {project.projectdescription}
                      </p>
                      </div></div>
                      </div>
                     
                      
                    </div>
                  );
                })
              )}
              
            </div>
            </div>
            

      </div>
  

  
  );
};

export default Pdf;
