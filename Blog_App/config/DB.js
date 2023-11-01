const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MONGODB seccessfully connected `);
  } catch (error) {
    console.log(`MONGO connect error ${error}`);
  }
};

module.exports = connectDB;

// const connectDatabase=()=>{
//     mongoose.connect(process.env.MONGO_URL).then((data)=>{
//     console.log(`mongodb connected with server: ${data.connection.host}`)
//     })

//     }
