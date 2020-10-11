import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileUpload from './FileUpload';

describe('<FileUpload />', () => {
  it('has upload button', () => {
    const { getByText } = render(<FileUpload />);
    getByText(/확인/);
  });

  it('upload file null check', () =>{
    const { container, getByText, getByPlaceholderText } = render(<FileUpload />);
    const input = getByPlaceholderText(/파일을 올려주세요/);
    const button = getByText(/확인/);

    fireEvent.change(input, {
      target: {
        files :[new File(['테스트'], '테스트.txt', {type: 'text/plain'})]
      }
    });

    fireEvent.click(button);
    expect(container.fileValue).not.toBeUndefined();
    expect(container.fileValue).not.toBeNull();
  });
});