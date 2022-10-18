"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
var data = [1, 2, 3, 4];
app.get("/", function (req, res) {
    res.send({ data: data });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//# sourceMappingURL=app%20copy.js.map