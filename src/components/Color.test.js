import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';
jest.mock("./Color");

const testColorBlank = {
  color: "",
  code: {hex: ""},
  id: "",
}

test("Renders without errors with blank color passed into component", () => {
  // Color.mockResolvedValueOnce(testColorBlank)
  // render(<Color/>)
});
  
test("Renders the color passed into component", () => {
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
});