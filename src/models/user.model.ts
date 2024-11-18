
import mongoose , { Document, Schema, model } from "mongoose";

export interface User {
username: string;
  name: string;
  email: string;
  password: string;
}

const userSchema : Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  brainShareIng:{
    type:Boolean,
    default:false
  }
}, {timestamps: true});


const User = mongoose.model<User>('User', userSchema);
export default User;