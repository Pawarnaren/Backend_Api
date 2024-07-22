import mongoose from "mongoose";

const Connection = async () => {
    const URL = `mongodb+srv://pawarnaren:naren123@cluster0.qzysk2i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL);
        console.log('DB connected successfully');
    } catch (error) {
        console.log(`Error while connecting to the database: ${error.message}`);
    }
};

export default Connection;
