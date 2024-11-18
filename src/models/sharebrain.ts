import mongoose , { Document, Schema, model } from "mongoose";

export interface sharebring{
    id: string;
}

const sharebringSchema : Schema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

export default mongoose.model<sharebring>('sharebring', sharebringSchema);