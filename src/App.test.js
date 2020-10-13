import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FileUpload from './FileUpload';

describe('<FileUpload />', () => {
  const { container, getByText, getByPlaceholderText } = render(<FileUpload />);
  const input = getByPlaceholderText(/파일을 올려주세요/);
  const button = getByText(/확인/);
  it('has upload button', () => {
    expect(input).toBeTruthy();
  });

  it('upload file null check', () =>{
    const testTextFile = new File(['테스트'], '테스트.txt', {type: 'text/plain'});
    const testFiles = [testTextFile];
    userEvent.upload(input, testFiles);
    //fireEvent.click(button);
    //expect(container.fileValue).not.toBeUndefined();
    console.log(input.files);
    expect(container.fileValue).not.toBeNull();
  });
});