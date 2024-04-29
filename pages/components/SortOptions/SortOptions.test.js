import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortOptions from "./SortOptions";

describe("SortOptions", () => {
  test('clicking on "First name" radio button calls sorts contacts by "firstName"', () => {
    const setSortBy = jest.fn();
    const { getByLabelText } = render(
      <SortOptions sortBy="" setSortBy={setSortBy} />
    );
    const firstNameRadioButton = getByLabelText("First name");
    fireEvent.click(firstNameRadioButton);
    expect(setSortBy).toHaveBeenCalledWith("firstName");
  });

  test('clicking on "Last name" radio button calls sorts contacts by "lastName"', () => {
    const setSortBy = jest.fn();
    const { getByLabelText } = render(
      <SortOptions sortBy="" setSortBy={setSortBy} />
    );
    const lastNameRadioButton = getByLabelText("Last name");
    fireEvent.click(lastNameRadioButton);
    expect(setSortBy).toHaveBeenCalledWith("lastName");
  });

  test('clicking on "Warmth" radio button calls sorts contacts by "warmth"', () => {
    const setSortBy = jest.fn();
    const { getByLabelText } = render(
      <SortOptions sortBy="" setSortBy={setSortBy} />
    );
    const warmthRadioButton = getByLabelText("Warmth");
    fireEvent.click(warmthRadioButton);
    expect(setSortBy).toHaveBeenCalledWith("warmth");
  });

  test("radio button is checked if sortBy matches its value", () => {
    const { getByLabelText } = render(
      <SortOptions sortBy="firstName" setSortBy={() => {}} />
    );
    const firstNameRadioButton = getByLabelText("First name");
    expect(firstNameRadioButton.checked).toBe(true);
  });
});
