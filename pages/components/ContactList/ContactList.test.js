import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactList from "./ContactList";

describe("ContactList Component", () => {
  it("renders contact list correctly", () => {
    const contacts = [
      {
        id: 0,
        firstName: "Emily",
        lastName: "Johnson",
        email: "emily@email.com",
        phone: "(000) 000-0000",
        imageUrl: "profile.png",
        lastCommunicated: "last Friday",
        frequency: "daily",
        primaryChannel: "Slack",
        warmth: 37,
      },
      {
        id: 1,
        firstName: "Michael",
        lastName: "Smith",
        email: "michael@email.com",
        phone: "(111) 111-1111",
        imageUrl: "profile.png",
        lastCommunicated: "last Friday",
        frequency: "daily",
        primaryChannel: "Slack",
        warmth: 82,
      },
    ];

    const { getByText } = render(<ContactList contacts={contacts} />);

    expect(getByText("Emily Johnson")).toBeInTheDocument();
    expect(getByText("Michael Smith")).toBeInTheDocument();
  });
});
