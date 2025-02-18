import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePic: { type: String, default: "default.jpg" },
  createdAt: { type: Date, default: Date.now }
})

const User = mongoose.model("User", userSchema);

export default User;