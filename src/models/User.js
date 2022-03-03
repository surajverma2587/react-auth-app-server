const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const imageSchema = require("./Image");

const userSchema = {
  firstName: {
    type: String,
    required: true,
    maxLength: 200,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 200,
  },
  username: {
    type: String,
    required: true,
    maxLength: 200,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  images: [imageSchema],
};

const schema = new Schema(userSchema, {
  toJSON: {
    getters: true,
  },
  id: true,
});

schema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

schema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("user", schema);

module.exports = User;
