const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//load env vars
dotenv.config({ path: "./config/config.env" });

//load models
const User = require("./models/User");
const Product = require("./models/Product");
const Category = require("./models/Category");
const Review = require("./models/Review");
const Order = require("./models/Order");

// Connect to DB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then (console.log('DB connected!'));

//Read JSON files

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/data/users.json`, "utf-8")
);

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/product.json`, "utf-8")
);
const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/data/category.json`, "utf-8")
);
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/data/reviews.json`, "utf-8")
);

//Import into DB

const importData = async () => {
  try {
    await User.create(users).then(console.log('Users loaded'));
    await Product.create(products).catch(console.log('Product falied'.red.bold));
    await Category.create(categories).catch(console.log('Category falied'.red.bold));
    //await Review.create(reviews);
    console.log(`Data Imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.log('[err thrown by importData]'.red);
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany().catch(console.log('User falied'.red.bold));
    await Product.deleteMany().catch(console.log('Product falied'.red.bold));
    await Category.deleteMany.catch(console.log('Category falied'.red.bold));
    //await Review.deleteMany();
    await Order.deleteMany();
    console.log("Data Destroy".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
