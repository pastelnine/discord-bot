import mongoose from "mongoose";

export default async function connectDB(MONGODB_URI) {
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