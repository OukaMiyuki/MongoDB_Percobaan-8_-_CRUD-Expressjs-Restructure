const Joi = require('joi'); //capitalize the first letter of the variable name means it is a class (Joi)
const mongoose = require('mongoose');

const Manga = mongoose.model('Manga',  new mongoose.Schema({
        name:{
            type: String,
            required: true,
            minlength: 5,
            maxlength: 100
        }
    })
);

function validateInput(masukan){ //a function to validate the input
    const skema = Joi.object({ //validation schema
        name: Joi.string().min(3).required()
    });
    return skema.validate(masukan);
}

exports.Manga = Manga;
exports.validateInput = validateInput;