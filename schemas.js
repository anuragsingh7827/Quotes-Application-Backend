const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => {
    return {
        type: 'string',
        base: joi.string(),
        messages: {
            'string.escapeHTML': '{{#label}} must not include HTML!!'
        },
        rules: {
            escapeHTML: {
                validate(value,helpers){

                    const clean = sanitizeHtml(value, {
                        allowedTags: [],
                        allowedAttributes: {},
                    });
                    if(clean !== value) return helpers.error('string.escapeHTML');
    
                    return clean;
                    
                }
            }

        }
    }
}

const Joi = BaseJoi.extend(extension);

module.exports.quoteSchema = Joi.object({
    author: Joi.string().trim().required(),
    text: Joi.string().trim().required()
});

module.exports.reviewSchema = Joi.object({
    comment: Joi.string().trim().required()
})