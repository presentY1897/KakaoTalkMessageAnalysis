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
});

describe('Uploaded Text Valid Check', () => {
  const { container, getByText, getByPlaceholderText } = render(<TalkFile />);
  // convert data by uploaded file


  it('Data was kakaotalk result error', () => {
    expect(() => { container.addFile(); }).toThrow(ReferenceError);
  });
  it('Data was kakaotalk result correct', () => {
    expect(() => { container.addFile(); }).not.toThrow(ReferenceError);
    expect(container.state.file.type);
  });
  it('Talk type check', () => {
    expect(() => { container.addFile(); }).not.toThrow(ReferenceError);
    expect(container.state.file.type);
  })
});

describe('DataTable Valid Check', () => {
  const { container, getByText, getByPlaceholderText } = render(<DataTable />);
  //Convert Data

  it('Person have correct type data', () => {

  });
  it('Person check', () => {

  });

  it('Room have correct type data', () => {

  });
  it('Room have correct talk data', () => {

  });
  it('Room was sorted by time', () => {

  })
})