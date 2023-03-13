const express = require('express');
const videoRoutes = require("./routes/videos")

const app = express();

app.listen(8080, function () {
    console.log('the server is running on port 8080');
});