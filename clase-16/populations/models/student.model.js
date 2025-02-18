import mongoose from "mongoose";
import bcrypt from "bcrypt";

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: { type: String, required: true },
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course"
        }
      }
    ],
    default: []
  }
});

//middleware .pre()
studentSchema.pre("find", function(next){
  this.populate("courses.course");
  next();
});

studentSchema.pre("save", async function(next){
  if(!this.isModified("password") ) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;