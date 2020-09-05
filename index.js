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
            message: "What license does this projet operate under?"  
        },
        {
            type: "input",
            name: "contributing",
            message: "List contributor name(s)."  
        },
        {
            type: "input",
            name: "tests",
            message: ""  
        },
        {
            type: "",
            name: "",
            message: ""  
        },
    ])
}