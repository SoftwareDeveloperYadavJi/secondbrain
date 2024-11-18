import mongoose , { Document, Schema, model } from "mongoose";

interface tag{
    name: string;
}


const tagSchema : Schema = new Schema({
    hashtag: {
        type: String,
        required: true,
    },
});

const Tag = mongoose.model<tag>('Tag', tagSchema);
export default Tag;