const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoryDetailSchema = new Schema({
    categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: false },
    theme: { type: String, default: null },
    header: {
        video: {
            type: {},
            default: null,
        },
        title: { type: String, default: null },
        subtitle: { type: String, default: null },
        description: { type: String, default: null },
    },
    overview: {
        titleOne: { type: String, default: null },
        descriptionOne: { type: String, default: null },
        titleTwo: { type: String, default: null },
        descriptionTwo: { type: String, default: null },
        overviewImage: {
            type: {},
            default: null,
        }
    },
    company: {
        companyTitle: { type: String, default: null },
        aboutTitle: { type: String, default: null },
        aboutDescription: { type: String, default: null },
        serviceTitle: { type: String, default: null },
        serviceDescription: { type: String, default: null },
        companyImage: {
            type: {},
            default: null,
        }
    },
    workingprocess: {
        title: { type: String, default: null },
        setps: { type: [], default: null },
        workingprocessImage: {
            type: {},
            default: null,
        }
    },
    result: {
        title: { type: String, default: null },
        description: { type: String, default: null },
        tagLine: { type: String, default: null },
        resultImage: {
            type: {},
            default: null,
        }
    },
    created_ts: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("categoryDetail", categoryDetailSchema);
