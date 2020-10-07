import React, { useState, useCallback } from 'react';

function FileUpload() {
  const [fileValue, setValue] = useState('');
  const inputChange = useCallback(e => {
      setValue(e.target);
  })
  return (
    <div className="FileUpload">
      <input placeholder='파일을 올려주세요' className="FileInputBox" value={fileValue} onChange={inputChange}/>
      <button type="submit" className="FileUploadButton">확인</button>
    </div>
  );
}

export default FileUpload;
