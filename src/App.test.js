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
    expect(() => {fireEvent.click(button)}).toThrow(ReferenceError);
  });

  it('upload file type check', () => {
    const testImageFile = new File(['테스트'], '테스트.png', {type: 'image/png'});
    const testFiles = [testImageFile];
    
    userEvent.upload(input, testFiles);
    expect(container.fileValue).not.toBeNull();
    expect(() => {fireEvent.click(button)}).toThrow(ReferenceError);
  });
});