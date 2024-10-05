import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
},
description: {
    type: String,
    requireed: true
},
date: {
    type: Date,
    default: Date.now,
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `user`,
    required: true
}
}, 
{
    timestamps: true
}
)

export default mongoose.model("event", eventSchema)