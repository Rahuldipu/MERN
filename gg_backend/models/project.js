import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
        title: {
            type: String,
            required: [true, "Please enter project title"],
            maxLength: [200, "Project title should not exceed 200 characters"],
        },
        price: {
            type: Number,
            required: [true, "Please enter project price"],
            maxLength: [6, "Project price should not exceed 6 digits"],
        },
        description: {
            type: String,
            required: [true, "Please enter project description"],
        },
        programmingLanguages: {
            type: String,
        },
        frameworks: {
            type: String,
        },
        images: [
            {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        ],
        demoVideoUrl: {
            type: String,
            required: [true, "Please video url of demo of project"],
        },
        bannerImage: {
            public_id: String,
            url: String,
        },
        sourceCode: {
            public_id: String,
            url: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
