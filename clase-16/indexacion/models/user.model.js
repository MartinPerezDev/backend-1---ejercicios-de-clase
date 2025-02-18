import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  bio: { type: String, index: "text" },
  createdAt: { type: Date, default: Date.now }
})

//indice compuesto
userSchema.index({ username: 1, createdAt: -1 });

const User = mongoose.model("User", userSchema);

export default User;