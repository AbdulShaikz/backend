import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String,   //cloudinary url
        required: true,
    },
    thumbnail: {
        type: String,   //cloudinary url
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        default: true,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video',videoSchema);