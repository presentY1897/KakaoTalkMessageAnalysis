import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileUpload from './FileUpload';

describe('<FileUpload />', () => {
  const { container, getByText, getByPlaceholderText } = render(<FileUpload />);
  const input = getByPlaceholderText(/파일을 올려주세요/);
  const button = getByText(/확인/);
  it('has upload button', () => {
    expect(input).toBeTruthy();
  });

  const testTextFile = new File(['테스트'], '테스트.txt', {type: 'text/plain'});
  it('upload file null check', () =>{
    fireEvent.change(input, {
      target: {
        files :[testTextFile]
      }
    });

    fireEvent.click(button);
    //expect(container.fileValue).not.toBeUndefined();
    expect(container.fileValue).not.toBeNull();
  });
});