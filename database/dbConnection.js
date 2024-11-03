import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "Cluster0",
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.log(`Failed to connect ${error}`);
    });
};
export default dbConnection;
