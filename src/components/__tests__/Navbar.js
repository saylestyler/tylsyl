import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';
import { expression } from '@babel/template';
import { exportAllDeclaration } from '@babel/types';

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
