import express from "express";
import nanobuffer from "nanobuffer";
import morgan from "morgan";

//set up a limited array
const msg = new nanobuffer(50);
const getMsgs = () => Array.from(msg).reverse();

// fell free to take out, this just seeds the server with at least one message
msg.push({
  user: "keneth",
  text: "hi",
  time: Date.now(),
});

// get express ready to run
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("frontend"));

app.get("/poll", function (req, res) {
  //use getMsgs to get messages to send back
});

app.post("/poll", function (req, res) {
  //add a new message to the server
});

//start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});