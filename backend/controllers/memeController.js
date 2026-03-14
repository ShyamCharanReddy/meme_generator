import Meme from '../models/memeModel.js';

const getMemes = async (req, res) => {
    try {
        const memes = await Meme.find({ user: req.user.id });
        res.status(200).json(memes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const setMeme = async (req, res) => {
    try {
        if (!req.body.url) {
            return res.status(400).json({ message: 'Please add an image url' });
        }

        const meme = await Meme.create({
            topText: req.body.topText,
            bottomText: req.body.bottomText,
            url: req.body.url,
            user: req.user.id
        });

        res.status(201).json(meme);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMeme = async (req, res) => {
    try {
        const { id } = req.params;
        
        const meme = await Meme.findById(id);

        if (!meme) {
            return res.status(404).json({ message: 'Meme not found' });
        }

        if (meme.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await meme.deleteOne();
        res.status(200).json({ id, message: 'Meme removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};

export { getMemes, setMeme };