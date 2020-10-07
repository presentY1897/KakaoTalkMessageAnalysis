import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import FileUpload from './FileUpload';

describe('<FileUpload />', () => {
  it('has upload button', () => {
    const { getByText } = render(<FileUpload />);
    getByText(/업로드/);
  })
});