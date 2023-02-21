import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    words: {type: String, required: true},
    voice: {type: String},
    picture: {type: String}
})

export default mongoose.model('Post', Post)