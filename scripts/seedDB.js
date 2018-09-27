const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Articles collection and inserts the sample article below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/test"
);

const articleSeed = [
  {
    title: "The News!",
    author: "Some Reporter",
    date: new Date(Date.now())
  }
  
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insert(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
