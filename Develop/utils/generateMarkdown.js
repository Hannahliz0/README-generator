// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GNU GPLv3") {
    return "![GNU GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "Apache 2.0") {
    return "![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "ISC") {
    return "![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)";
  } else {
    return "";
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPLv3") {
    return "[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "ISC") {
    return "[ISC License](https://opensource.org/licenses/ISC)";
  } else {
    return "";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
  ## License
  This project is licensed under the ${license} license.
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
  } else {
    return "";
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} by ${data.Contributors}
  ${renderLicenseBadge(data.license)}
  ## Description
  - **Motivation:** ${data.motivation}
  - **Reason:** ${data.reason}
  - **Problem Solved:** ${data.problem}
  - **Learning:** ${data.learning}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [contributors](#contributors)
  * [Tests](#tests)
  ${renderLicenseSection(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.Contributors} GitHub -
  ${data.github} - Email - 
  ${data.email}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at ${data.email}, find me on GitHub at ${data.github}, or visit my GitHub profile at https://github.com/Hannahliz0
  `;
}

export { generateMarkdown };