'use client';
import React, { useState, useRef } from 'react';
import { FileUp } from 'lucide-react';
import CourseData from './CourseData';
function Upload() {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);
  const [files, setFiles] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    // console.log('File has been added');
    console.log();
    if (e.target.files && e.target.files[0]) {
      //   console.log(e.target.files);
      //   for (let i = 0; i < e.target.files['length']; i++) {
      setFiles(e.target.files[0]);
      //   }
    }
  }

  function handleSubmitFile(e) {
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // console.log(e.dataTransfer.files);
    setFiles(e.dataTransfer.files[0]);
    // if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    //   for (let i = 0; i < e.dataTransfer.files['length']; i++) {}
    // }
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  //   function removeFile(fileName, idx) {
  //     const newArr = [...files];
  //     newArr.splice(idx, 1);
  //     setFiles([]);
  //     setFiles(newArr);
  //   }

  function openFileExplorer() {
    inputRef.current.value = '';
    inputRef.current.click();
  }

  return (
    <div className="border border-[#D6DFE4] rounded-3xl bg-gray-100 mt-4 p-6">
      <form
        className={`${
          dragActive ? 'bg-blue-400' : 'bg-blue-100'
        } rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center bg-white border-[2px] border-dashed p-4`}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <div className="text-gray-400">
          <FileUp size={50} strokeWidth={2.45} absoluteStrokeWidth />
        </div>

        {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={handleChange}
          accept=".pdf"
        />
        <h2 className="mt-2 text-[#7A8196] font-[700] text-[16px]">
          Drag and drop a PDF
        </h2>
        <p className="text-[12px] text-[#7A8196] font-[600]">
          *Limit 25 MB per file.
        </p>
        <button
          className="mt-8 py-[8px] px-[12px] text-[15px] font-[800] text-[#6947BF] border border-[#CEC4EB] rounded-[20px] shadow-lg"
          onClick={openFileExplorer}
        >
          Upload your file
        </button>
      </form>
      <CourseData />
    </div>
  );
}

export default Upload;
