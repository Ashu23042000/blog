const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// database config----

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log(err);
});



// routes----

const home = require("./routes/home");
app.use("/", home);

const idioms = require("./routes/idioms");
app.use("/idioms", idioms);

const dailySentences = require("./routes/dailySentences");
app.use("/daily-sentences", dailySentences);

const paragraphTranslate = require("./routes/paragraphTranslate");
app.use("/paragraph-translate", paragraphTranslate);

const addIdioms = require("./routes/addIdioms");
app.use("/add-idioms", addIdioms);

const addDailySentences = require("./routes/addDailySentences");
app.use("/add-daily-sentences", addDailySentences);

const addParagraph = require("./routes/addParagraph");
app.use("/add-paragraph", addParagraph);



app.listen("3000", () => {
    console.log("Server is running on port 3000")
});