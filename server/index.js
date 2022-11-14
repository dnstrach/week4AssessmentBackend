const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, addFortune, updateFortune, deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortunes", getFortunes);
app.post("/api/fortunes", addFortune);  //same endpoint because same data?
app.put("/api/fortunes/:index", updateFortune)
app.delete("/api/fortunes/:index", deleteFortune)

app.listen(4000, () => console.log("Server running on 4000"));
