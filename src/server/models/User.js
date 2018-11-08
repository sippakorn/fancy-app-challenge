const mongoose = require("mongoose"),
  crypto = require("crypto"),
  language = require("./languages");

const supportLanguage = Object.keys(language);

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true
    },
    hash: String,
    salt: String,
    isPublic: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      enum: supportLanguage,
      default: "en"
    }
  },
  { timestamps: true }
);

UserSchema.methods.validPassword = function(password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

module.exports = mongoose.model("User", UserSchema);
