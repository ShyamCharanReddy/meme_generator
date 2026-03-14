import mongoose from 'mongoose';

const memeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    topText: {
        type: String,
        required: false
    },
    bottomText: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: [true, 'Please add an image URL']
    }
}, {
    timestamps: true
});

const Meme = mongoose.model('Meme', memeSchema);

export default Meme;    