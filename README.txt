Cypress API Automation – Authentication Flow

    This project contains automated API tests built with Cypress.  
    It validates the authentication flows (Signup and Login) using the Demoblaze API.

    The solution focuses on clarity, maintainability, and visible execution evidence
    by capturing both request inputs and response outputs.


Requirements

    - Node.js (version 18 or higher)
    - npm


Installation

    1. Clone the repository or unzip the project folder
    2. Open a terminal in the project root directory
    3. Install dependencies:

        npm install

Running the tests

To open Cypress Test Runner:

    npm run cy:open

To run the tests in headless mode:

    npm run cy:run

Test reports

    Test execution reports are generated using Mochawesome and are included
    as supporting evidence of the implementation.

    After running the tests, HTML reports can be found at:

    cypress/reports/index.html


View the report

    Navigate to the cypress/reports directory
    Open index.html in a browser

Project structure

    cypress/
    ├── e2e/             → API test specifications
    ├── services/        → API service methods
    ├── helpers/         → Utility and random data generators
    ├── fixtures/        → Test data
    ├── reports/         → HTML execution reports
    cypress.config.js    → Cypress configuration
