import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';
import React from 'react';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  test('has the word NextJS', () => {
    const {getByText} = render(<TestComponent />);
    expect(getByText(/NextJS/)).not.toBeNull();
  });
});