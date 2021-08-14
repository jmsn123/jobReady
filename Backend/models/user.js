const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocal = require("passport-local-mongoose");

const bcrypt = require("bcryptjs");
// will add more later but for now this is ok
const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});
UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      callback(null, isMatch);
    }
  });
};

UserSchema.plugin(passportLocal);
module.exports = mongoose.model("User", UserSchema);
