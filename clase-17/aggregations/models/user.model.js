import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  email: { type: String, unique: true },
  bio: String,
  createdAt: { type: Date, default: Date.now },
  purchases: {
    type: Array,
    default: []
  }
});

userSchema.index({ bio: "text" });

const User = mongoose.model("User", userSchema);

export default User;
