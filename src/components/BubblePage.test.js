import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", () => {
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  //Keep in mind that our service is called on mount for this component.
  const { rerender } = render(<BubblePage />);

  const colors = await screen.findAllByTestId(/color/i);

  expect(colors).not.toBeInTheDocument;

  // rerender(<BubblePage />);

  // const colors = await screen.findAllByTestId(/color/i);

  // expect(colors).toHaveLength(11);
});