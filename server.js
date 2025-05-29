const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" folder
app.use(express.static("public"));

// Serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
