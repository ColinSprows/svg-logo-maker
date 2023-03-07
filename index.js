const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

const colorArray = {

}

const questions = [
    {
        type: list,
        message: "Please select a shape",
        name: "shape",
        choices: ["Triangle", "Circle", "Square"]
    },
    {
        type: input,
        message: "Please select a color",
        name: "color",
        validate: function(input) {
            if (colorArray.includes(input)) {
                return true
            } else {
                return "That color is not recognized!"
            }
        }
    },
    {
        type: input,
        message: "Enter your text, 3 characters max",
        name: "text",
        validate: function(input) {
            if (input.length < 4 && input.length > 0) {
                return true
            } else {
                return "Only 3 characters or less, please."
            }
        }
    },
]