import mongoose from "mongoose";

export const connectDatabase = () => {
    let MONGO_DB_URI = "";

    if (process.env.NODE_ENV == "DEVELOPMENT")
    MONGO_DB_URI = process.env.DB_LOCAL_URI;
    if (process.env.NODE_ENV == "PRODUCTION") MONGO_DB_URI = process.env.DB_URI;

    mongoose.connect(MONGO_DB_URI).then((con) => {
        console.log(
            `MongoDB database connected with HOST: ${con?.connection.host}`
        );
    });
};
