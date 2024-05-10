"use client"

import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import dicomParser from 'dicom-parser';
import F6 from '@antv/f6';
import DicomDiagram from './dicomDiagram.js';

function dumpFile(file: any) {
  let reader = new FileReader();
  reader.onload = function(evt) {
    let arrayBuffer = reader.result;
    let byteArray = new Uint8Array(arrayBuffer);
    const options = { TransferSyntaxUID: '1.2.840.10008.1.2' };
    let dataSet = dicomParser.parseDicom(byteArray, options);
    let patientId = dataSet.string('x00100020');
    let studyInstanceUid = dataSet.string('x0020000d');
    let seriesInstanceUid = dataSet.string('x0020000e');
    console.log(patientId);
  }
  reader.readAsArrayBuffer(file);
}


const props = {
  name: 'file',
  multiple: true,
  showUploadList: {
    showPreviewIcon: false,
    showRemoveIcon: false,
    showdownloadIcon: false,
  },
  beforeUpload: (file: any) => {
    dumpFile(file);
    return false;
  },
  
};

export default function Home() {
  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
      <DicomDiagram></DicomDiagram>
    </div>
  );
}
