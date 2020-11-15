const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
    {
        review: {
            type: String,
            required: "You need to leave a review!",
            minlength: 1
        },
        author: {
            type: String
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Review = model('Review', reviewSchema);

module.exports = Review;