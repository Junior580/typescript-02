"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
app.use(routes_1.router);
const port = 3000;
app.listen(port, () => {
    console.log("🚀 Server is running");
});
