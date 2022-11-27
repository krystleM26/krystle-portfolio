import React, { useState } from 'react'
import './resume.css'

import { Document, Page, pdfjs } from 'react-pdf'
import krystleResume from '../../assets/krystleResume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const loadDocSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }
  //   const { pdf } = props

  return (
    <div className=" resumeDoc">
      <Document file={krystleResume} loadSuccess={loadDocSuccess}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default Resume
