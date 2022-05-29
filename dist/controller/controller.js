"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.padraoController = void 0;
const path_1 = __importDefault(require("path"));
exports.padraoController = {
    get: (req, res) => {
        res.status(200).sendFile(path_1.default.join(__dirname, "../", "../src/views/index.html"));
        console.log("cu");
    },
    post: (req, res) => {
        res.send("Hello From back-end method post");
    },
    put: (req, res) => {
        res.send("Hello From back-end method put");
    },
    delete: (req, res) => {
        res.send("Hello From back-end method delete");
    },
};
