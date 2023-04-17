"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000 || null;
app.get("/", function (req, res) {
    let dir = __dirname.substring(0, __dirname.length - 4);
    res.sendFile(dir + "/index.html");
});
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});
