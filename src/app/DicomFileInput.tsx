import React, { useState, useEffect } from 'react';
import dicomParser from 'dicom-parser';

function dumpFile(file: any) {
  // let reader = new FileReader();
  // reader.onload = function(evt) {
  //   let arrayBuffer = reader.result;
  //   let byteArray = new Uint8Array(arrayBuffer);
  //   const options = { TransferSyntaxUID: '1.2.840.10008.1.2' };
  //   let dataSet = dicomParser.parseDicom(byteArray, options);
  //   let patientId = dataSet.string('x00100020');
  //   let studyInstanceUid = dataSet.string('x0020000d');
  //   let seriesInstanceUid = dataSet.string('x0020000e');
  //   console.log(patientId);
  // }
  // reader.readAsArrayBuffer(file);
}

export default function DicomFileInput() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
    </div>
  )
};
