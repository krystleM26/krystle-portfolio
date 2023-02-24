import React from 'react'
import './resume.css'

import { Document, Page, pdfjs } from 'react-pdf'
import krystleResume from '../../assets/krystleResume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
  return (
    <div className=" resumeDoc">
      <Document file={krystleResume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default Resume
