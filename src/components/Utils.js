import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import Pdf from "./Pdf";

function generatePDF(userProfile) {
  const printElement = ReactDOMServer.renderToString(
    Pdf({
      profilepicture: userProfile.profilepicture,
      firstname: userProfile.firstname,
      lastname: userProfile.lastname,
      designation: userProfile.designation,
      email: userProfile.email,
      phonenumber: userProfile.phonenumber,
      summary: userProfile.summary,
      experience:userProfile.experience,
      education:userProfile.education,
      projects:userProfile.projects,
      technologies:userProfile.technologies
    })
  );

   var opt = {
    margin:       [15, 0, 30, 0], //top, left, buttom, right,
    enableLinks: true,
    filename: "pdfreport",
    html2canvas: { useCORS: true },
    jsPDF: {},
  };

  html2pdf()
    .from(printElement)
    .set(opt)
    .toPdf()
    .get("pdf")
    .then(function (pdf) {
      pdf.setPage(1);
      
    })
    .save();

   
}




export default {
  generatePDF,
  };
  


