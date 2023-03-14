const express = require('express');
const router = express.Router();
const fs = require("fs");


router.get("/", function (request, response) {
    const videosFile = fs.readFileSync("./data/videos.json");
    const videosArray = JSON.parse(videosFile);
    response.json(videosArray)
})

router.get("/videos/:videoId", function (request, response) {
    console.log(request.params);
    const videosFile = fs.readFileSync("./data/videos.json");
    const videosArray = JSON.parse(videosFile);
    const videoWithId = videosArray.find((video) => {
        return video.id === request.params.videoId;
    })
    if (!videoWithId) {
        response.status(404);
        response.json([]);
        return;
    }
    response.json(videoWithId);
})

module.exports = router;

