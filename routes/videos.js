const express = require('express');
const router = express.Router();
const fs = require("fs");
const uniqid = require('uniqid');

// const data = require("./data/videos.json");


router.get("/", function (request, response) {
    const videosFile = fs.readFileSync("./data/videos.json");
    const videosArray = JSON.parse(videosFile);
    response.json(videosArray)
})

router.get("/videos/:videoId", function (request, response) {
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

router.post("/upload", (request, response) => {

    console.log(request.body);
    const newVideo = request.body;
    newVideo.id = uniqid();
    newVideo.title = request.body.title;
    newVideo.channel = "User Channel";
    newVideo.image = "http://localhost:8080/Upload-video-preview.jpg";
    newVideo.description = request.body.description;
    newVideo.views = "1";
    newVideo.likes = "1";
    newVideo.duration = "3:00";
    newVideo.video = "";
    newVideo.timestamp = Date.now();
    newVideo.comments = [];


    const videosFile = fs.readFileSync("./data/videos.json");
    const videosArray = JSON.parse(videosFile);

    videosArray.push(newVideo);

    fs.writeFileSync("./data/videos.json", JSON.stringify(videosArray));
    console.log(videosArray);
    response.json(videosArray)
})

module.exports = router;

