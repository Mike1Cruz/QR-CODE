const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // Serves files from the 'public' folder

app.get("/", (req, res) => {
  res.send("Hello, your server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

