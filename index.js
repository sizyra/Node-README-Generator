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
            name: "license",
            message: "What license does this project operate under?"  
        },
        {
            type: "input",
            name: "contributing",
            message: "How can others contribute to this project, if at all?"  
        },
        {
            type: "input",
            name: "tests",
            message: ""  
        },
        {
            type: "input",
            name: "faq",
            message: "List any common issues and their solutions here."  
        },
    ])
}

function createReadMe(responses) {
    return `
    # ${responses.title}

    ## Description
        ${responses.description}

    ## Table of Contents
        [Description]()

    ## Installation
        ${responses.installation}

    ## Usage
        ${responses.usage}

    ## License
        
    ## Contributing
        ${responses.contributing}

    ## Tests

    ## Questions
        ${responses.questions}
    `
}

async function init() {
    try {
        const responses = await userPrompts();

        const readMe = createReadMe(responses);

        await writeFileAsync("README.md", "utf8");

        console.log("Successfully created new README.md file.");
    } catch(err) {
        console.log(err);
    }
}

init();