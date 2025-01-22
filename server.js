const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let messages = [];
let currentId = 1;



app.get("/api/messages", (req, res) => {
  console.log("getting all msg");
  res.json(messages);
});


app.post("/api/message", (req, res) => {
  const {text} = req.body;

  if (!text) {
    return res.status(400);
  };

  const newMessage = {
    id: currentId++,
    text,
    createdAt: new Date()
  };

  messages.push(newMessage);
  res.status(200).json(newMessage);

});


app.listen(PORT, () => {
  console.log("Listening on port" + PORT)
});