"use client"

import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import {
  applyPresentationStateToImage,
  readDicomEncapsulatedPdf,
  structuredReportToHtml,
  structuredReportToText,
  readDicomTags,
  readImageDicomFileSeries,
  setPipelinesBaseUrl,
  getPipelinesBaseUrl,
} from "@itk-wasm/dicom"


const props = {
  name: 'file',
  multiple: true,
  showUploadList: {
    showPreviewIcon: false,
    showRemoveIcon: false,
    showdownloadIcon: false,
  },
  beforeUpload: (file: any) => {
    console.log('beforeUpload', file);

    readDicomTags(file, {
      webWorker: false
    }).then((tags) => {
      console.log('tags', tags);
    })
    // const reader = itk.
    return false;
  },

};

export default function Home() {


  return (
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
  );
}
