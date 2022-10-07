import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from "jspdf"
import "./InputForm.css"

const ref = React.createRef();

const PDF = (props) => {

 const printDocument = () => {
    const input = document.getElementById('root');
    html2canvas(input , {
      onclone: document => {
        document.getElementById("divToPrint").style.visibility = "hidden";
    }
  })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
        });
        pdf.addImage(imgData, 'JPEG', 0, 10 );
        pdf.save("download.pdf");
      })
    ;
  }

  return (
      <div className='pdfClass'>
        <h1>Employee Details</h1>
        <p>First Name : {props.firstName}</p>
        <p>Last Name : {props.lastName}</p>
        <p>Designation : {props.designation}</p>

        <button id='divToPrint' onClick={printDocument}>Download PDF</button>
      </div>
  
  );
}

export default PDF;