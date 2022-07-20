import React from "react";
import '../App.css'

import { Document ,Page, pdfjs } from "react-pdf";
import KrystleResume from '../assets/KrystleMitchell-Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    return (
       

        <div className="resume">
            <Document file={KrystleResume}>
            <Page pageNumber={1} />
            </Document>
        </div>
       
    )
}

export default Resume