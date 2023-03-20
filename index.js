const express = require('express');
const videoRoutes = require("./routes/videos");
const cors = require("cors");

const app = express();

app.use(express.static("public"));


app.use(cors());
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use("/api", createProxyMiddleware({
    target: "http://localhost:8080/",
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    }
}));
app.use(express.json());

app.use("/", videoRoutes,);



app.listen(8080, function () {
    console.log('the server is running on port 8080');
});