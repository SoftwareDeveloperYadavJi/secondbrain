import mongoose , { Document, Schema, model } from "mongoose";
import Tag from "./tag.modle";

export interface Content {
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
  tags: string[];
}

const contentSchema : Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    default: "",
  },
});

const Content = mongoose.model<Content>('Content', contentSchema);
export default Content;


