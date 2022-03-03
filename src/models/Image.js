const { Schema } = require("mongoose");

const imageSchema = {
  title: {
    type: String,
    required: true,
    maxLength: 200,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
};

const schema = new Schema(imageSchema, {
  toJSON: {
    getters: true,
  },
  id: true,
});

module.exports = schema;
