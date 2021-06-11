import React from "react"
import { render, screen, describe, expect } from '@testing-library/react';
import App from './App';
import { getElementById } from "domutils";

describe('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('renders circle', () => {
  render(<App/>);
  expect(getElementById("circle").toBeInTheDocument)
})