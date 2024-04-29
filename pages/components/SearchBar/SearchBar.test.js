import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("renders search bar correctly", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("typing into search bar triggers onChange event handler", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleChange} />
    );
    const inputElement = getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("onChange event handler updates state with correct search term", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleChange} />
    );
    const inputElement = getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
  });

  test("onSearch callback function is called with correct search term", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleChange} />
    );
    const inputElement = getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });
});
