import mongoose from "mongoose";

const Post = new mongoose.Schema({
    letter: {type: String, required: true},
    voiceLetter: {type: String, required: true},
    pictureLetter: {type: String, required: true},
    words1: {type: String, required: true},
    voice1: {type: String, required: true},
    picture1: {type: String, required: true},
    words2: {type: String, required: true},
    voice2: {type: String, required: true},
    picture2: {type: String, required: true},
    words3: {type: String, required: true},
    voice3: {type: String, required: true},
    picture3: {type: String, required: true}
})

export default mongoose.model('Post', Post)