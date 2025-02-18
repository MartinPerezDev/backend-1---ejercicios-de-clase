import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  topics: {
    type: Array,
    default: []
  },
  professor: String
})

const Course = mongoose.model("Course", courseSchema);

export default Course;