import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileUpload from './FileUpload';

describe('<FileUpload />', () => {
  it('has upload button', () => {
    const { getByText } = render(<FileUpload />);
    getByText(/업로드/);
  });

  it('upload file null check', () =>{
    const { getByText, getByPlaceholderText } = render(<FileUpload />);
    const input = getByPlaceholderText(/파일을 올려주세요/);
    const button = getByText(/업로드/);

    fireEvent.change(input, {
      target: 'testcase'
    });

    fireEvent.click(button);
    expect(input.value).not.toBeUndefined();
    expect(input.value).not.toBeNull();
  });
});