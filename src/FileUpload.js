import React, { useState, useCallback } from 'react';

function FileUpload() {
  const [fileValue, setValue] = useState(0);
  const inputChange = e => {
      setValue(e.target.files[0]);
  }
  return (
    <div className="FileUpload">
      <input type='file' placeholder='파일을 올려주세요' className="FileInputBox" onChange={inputChange}/>
      <button type="submit" className="FileUploadButton">확인</button>
    </div>
  );
}

export default FileUpload;
