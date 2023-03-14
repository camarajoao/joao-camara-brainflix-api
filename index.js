const express = require('express');
const videoRoutes = require("./routes/videos");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.use(videoRoutes);



app.listen(8080, function () {
    console.log('the server is running on port 8080');
});