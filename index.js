const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function userPrompts() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe the project."  
        },
// remember to insert table of contents
        {
            type: "input",
            name: "installation",
            message: "Describe how to install this project."  
        },
        {
            type: "input",
            name: "usage",
            message: "Explain how to use this project."  
        },
        {
            type: "input",
            name: "owner",
            message: "Who owns this product?"
        },
        {
            type: "list",
            name: "license",
            message: "What license does this project operate under?",
            choices: [
                'Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                'BSD 3-Clause "New" or "Revised" license [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
                'BSD 2-Clause "Simplified" or "FreeBSD" license [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
                'GNU General Public License (GPL) [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                'GNU Library or "Lesser" General Public License (LGPL) [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
                'MIT license [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                'Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                'Eclipse Public License version 2.0 [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
            ]  
        },
        {
            type: "input",
            name: "contributing",
            message: "How can others contribute to this project, if at all?"  
        },
        {
            type: "input",
            name: "tests",
            message: "Describe the tests you've written for this product, if any."  
        },
        {
            type: "input",
            name: "questions",
            message: "List any common issues and their solutions here."  
        },
    ])
}

function createReadMe(responses) {
    return `# ${responses.title}

## Description
${responses.description}

## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Tests](#Tests)
7. [Questions](#Questions)

## Installation
${responses.installation}

## Usage
${responses.usage}

## License
${responses.license}

## Contributing
${responses.contributing}

## Tests
${responses.tests}

## Questions
${responses.questions}
`
}

async function init() {
    try {
        const responses = await userPrompts();

        const readMe = createReadMe(responses);

        await writeFileAsync("README.md", readMe);

        console.log("Successfully created new README.md file.");
    } catch(err) {
        console.log(err);
    }
}

init();

//async function licenses() {
    //if(responses.license == 'MIT') {
        //responses.license = `Copyright ${new Date(getYear())} ${responses.owner}

        //Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        //The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        //THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    //}

    //return responses.license
//}