const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        // "mongodb+srv://shaikinthiyaz904:Inthiyaz9293@cluster0.wpe40ly.mongodb.net/"
        "mongodb+srv://shaikinthiyaz904:21am5A0501@cluster0.tkcqp6v.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
