'use client';
import React, { useState } from 'react';
import Pdfcontroller from './Pdfcontroller';
import PdfRenderer from './PdfRender';
import { convertBase64toUrl } from '@/lib/helper';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${'4.4.168'}/pdf.worker.min.js`;

function FullPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const data = JSON.parse(window.localStorage.getItem('workspace'))[0].pdf;
  // const url = convertBase64toUrl(data);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // console.log(url);
  return (
    <div className="rounded-t-2xl bg-gray-100">
      <div className="flex justify-between p-2 flex-wrap gap-2">
        <h1 className="bg-white text-[#3D404B] text-[15px] rounded-3xl px-3 py-1">
          IB Economic Paper IA2 . pdf
        </h1>
        <Pdfcontroller />
        <Document
          file={`data:application/pdf;base64,${data}`}
          // file={data}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {/* <PdfRenderer url={url} /> */}
      </div>
    </div>
  );
}

export default FullPDF;
