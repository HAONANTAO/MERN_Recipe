import mongoose from "mongoose";

//基础数据格式设置
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//seting this schema to this model（users)
const UserModel = mongoose.model("users", UserSchema);
export { UserModel };
