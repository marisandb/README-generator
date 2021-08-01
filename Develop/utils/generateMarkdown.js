const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateLicenseBadge = data => {
  if (!data.tableOfContents.includes('License')) {
    return '';
  }
  let licenseURL = data.license.replace(" ", "%20")
  return `
[![license-${licenseURL}-blue.png](https://img.shields.io/badge/license-${licenseURL}-blue)](#License)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.table}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  ${data.licenseBadge}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  You contact me via email at ${data.email} or through github with the following link https://www.github.com/${data.username}/
`;
}

module.exports = generateMarkdown;


