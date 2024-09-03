import { connect, disconnect } from "mongoose";

export default async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error(`MongoDB connection failed due to error.\n${error}`);
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error(`Error while attempting to disconnect from MongoDB.\n${error}`);
    }
}


export { connectToDatabase, disconnectFromDatabase };
