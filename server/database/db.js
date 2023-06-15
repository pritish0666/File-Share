import mongoose from "mongoose";

const DBConnection = async () => {
  //const mongo_URL = `mongodb://user:mynameispritish@ac-ohjcxpx-shard-00-00.hrtzl2c.mongodb.net:27017,ac-ohjcxpx-shard-00-01.hrtzl2c.mongodb.net:27017,ac-ohjcxpx-shard-00-02.hrtzl2c.mongodb.net:27017/?ssl=true&replicaSet=atlas-rdekev-shard-0&authSource=admin&retryWrites=true&w=majority`;
  const url = `mongodb://user:mynameispritish@ac-ohjcxpx-shard-00-00.hrtzl2c.mongodb.net:27017,ac-ohjcxpx-shard-00-01.hrtzl2c.mongodb.net:27017,ac-ohjcxpx-shard-00-02.hrtzl2c.mongodb.net:27017/?ssl=true&replicaSet=atlas-rdekev-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("Database connected succesfully");
  } catch (error) {
    console.error("error while connecting to the database", error.message);
  }
};

export default DBConnection;
