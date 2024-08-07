# AI Contacts

This project is a simple contacts management application built using Next.js and React. Users can view a table of contacts with detailed information about each contact, including an indicator for how warm or cold they are across integrations and teammates.

## Features

- Table of contacts displaying basic information
- Detail view for each contact
- Search contacts by name
- Sort contacts by first name, last name, or warmth score

## Getting Started

### Installation

Clone the repository to your local machine:

`git clone https://github.com/newalina/warmth.git`

Navigate to the project directory:

`cd warmth`

Install dependencies:

`npm install`

### Running the Application

Start the development server:

`npm run dev`

Open your web browser and visit http://localhost:3000 to view the application.

### Running Tests

To run tests, use the following command:

`npm test`

## Project Structure

    warmth/
    ├── components/
    │   ├── ContactList/
    │   │   ├── ContactList.js
    │   │   └── ContactList.module.css
    │   ├── SearchBar/
    │   │   ├── SearchBar.js
    │   │   └── SearchBar.module.css
    │   ├── SortOptions/
    │   │   ├── SortOptions.js
    │   │   └── SortOptions.module.css
    ├── pages/
    │   ├── index.js
    ├── public/
    │   └── contacts.json
    ├── styles/
    │   └── Home.module.css
    ├── .gitignore
    ├── package.json
    └── README.md

## Credit

- [Smile icon](https://thenounproject.com/icon/smile-6368711/)
- [Details animation](https://medium.com/@jgustavo.wd/solved-how-to-fully-animate-the-details-html-element-with-only-css-no-javascript-b7d32c53a9d7)
- [particles.js](https://vincentgarreau.com/particles.js/)
