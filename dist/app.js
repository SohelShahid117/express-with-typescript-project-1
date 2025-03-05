"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
// import { userInfo } from "os"
const app = (0, express_1.default)();
// const port = 3000
//parser
app.use(express_1.default.json());
app.use(express_1.default.text());
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// app.get('/', (req:Request, res:Response) => {
// app.get('/:userId', (req:Request, res:Response) => {
// app.get('/:userId/:subId', (req:Request, res:Response) => {
// app.get('/', (req:Request, res:Response) => {
app.get('/', logger, (req, res) => {
    // console.log(req.params)
    // console.log(req.query)
    console.log(req.query.name, req.query.email);
    // res.send('Hello World!')
    // res.send('Hello programmer!')
    // res.send('Hello developers!')
    res.send('Hello Problem solvers!');
});
app.post("/", logger, (req, res) => {
    console.log("i m in level2 developer");
    res.send("i m in level2 developer");
    console.log(req.body);
});
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
exports.default = app;
