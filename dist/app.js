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
const userRouter = express_1.default.Router();
console.log(userRouter);
// app.use("/",userRouter)
app.use("/api/v1/users/", userRouter);
const courseRouter = express_1.default.Router();
app.use("/api/v1/course/", courseRouter);
// userRouter.get(
userRouter.post(
// "/api/v1/users/create-user",
"/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user is created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course is created successfully",
        data: course,
    });
});
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// app.get('/', (req:Request, res:Response) => {
// app.get('/:userId', (req:Request, res:Response) => {
// app.get('/:userId/:subId', (req:Request, res:Response) => {
// app.get('/', (req:Request, res:Response) => {
app.get("/", logger, (req, res) => {
    // console.log(req.params)
    // console.log(req.query)
    console.log(req.query.name, req.query.email);
    // res.send('Hello World!')
    // res.send('Hello programmer!')
    res.send("Hello developers!");
    // res.send('Hello Problem solvers!')
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
