import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  email: { type: String, unique: true },
  bio: { type: String, index: "text" },
  createdAt: { type: Date, default: Date.now },
  purchases: {
    type: Array,
    default: []
  }
});

userSchema.plugin(paginate);

const User = mongoose.model("User", userSchema);

export default User;
