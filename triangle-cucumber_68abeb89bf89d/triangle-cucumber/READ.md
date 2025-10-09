# Triangle Type Checker with Cucumber.js

This project checks the type of triangle based on side lengths using JavaScript and tests it using Cucumber.js.

## 📁 Folder Structure

- triangle.js
- features/
  - triangle.feature
  - step_definitions/
    - triangle.steps.js
- READ.md

## 🚀 Setup Instructions

1. Initialize project and install dependencies:
   ```bash
   npm init -y
   npm install @cucumber/cucumber expect
   ```
2. Show the results in HTML or JSON
   npm install --save-dev @cucumber/pretty-formatter
   npx cucumber-js --format @cucumber/pretty-formatter
   
3. Use Cucumber report
   npm install --save-dev cucumber-html-reporter

4. Create generate-report.js

   const reporter = require('cucumber-html-reporter');

   const options = {
   theme: 'bootstrap',
   jsonFile: 'report.json',
   output: 'report.html',
   reportSuiteAsScenarios: true,
   launchReport: true,
   };

   reporter.generate(options);

5. Run this command

   npx cucumber-js --format json:report.json
   node generate-report.js
