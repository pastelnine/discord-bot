import mongoose from "mongoose";
import { MONGODB_URI } from "../config.js";

export default async function connectDB() {
    const URI = MONGODB_URI;
    if (!URI) return console.log('[DB] No connection string.');

    mongoose.connect(URI)
        .then(() => {
            console.log('[DB] Connected to MongoDB.')
        })
        .catch((err) => {
            console.error('[DB] An error occured while connecting to MongoDB. ', err);
        });
}