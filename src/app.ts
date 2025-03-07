// const express = require('express')
import { error } from "console";
import express, { NextFunction } from "express";
import { hostname } from "os";
// import { userInfo } from "os"
conimport { NextFunction } from 'express';
const app = express();
// const port = 3000

//parser
app.use(express.json());
app.use(express.text());

const userRouter = express.Router();
console.log(userRouter);
// app.use("/",userRouter)
app.use("/api/v1/users/", userRouter);

const courseRouter = express.Router();
app.use("/api/v1/course/", courseRouter);

// userRouter.get(
userRouter.post(
  // "/api/v1/users/create-user",
  "/create-user",
  (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
      success: true,
      message: "user is created successfully",
      data: user,
    });
  }
);

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course is created successfully",
    data: course,
  });
});

//middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// app.get('/', (req:Request, res:Response) => {
// app.get('/:userId', (req:Request, res:Response) => {
// app.get('/:userId/:subId', (req:Request, res:Response) => {
// app.get('/', (req:Request, res:Response) => {
// app.get("/", logger, (req: Request, res: Response) => {
// app.get("/", logger, async(req: Request, res: Response) => {
app.get("/", logger, async(req: Request, res: Response,next:NextFunction) => {
  // console.log(req.params)
  // console.log(req.query)
  console.log(req.query.name, req.query.email);
  // res.send('Hello World!')
  // res.send('Hello programmer!')
  // res.send("Hello developers!");
  // res.send('Hello Problem solvers!')
  // res.send(something prblm)
  try{
    res.send(something prblm)

  }catch(err){
    console.log(err)
    next(err)
    // res.status(400).json({
    //   success:false,
    //   message:"failed to get data"
    // })
  }
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log("i m in level2 developer");
  res.send("i m in level2 developer");
  console.log(req.body);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.all("*",(req,res)=>{
  res.status(400).json({
    success:false,
    message:"route not found"
  })
})


//global err handler
app.use(error:any,req:Request,res:Response,next:NextFunction)=>{
  console.log(error)
  if(error){
    res.status(400).json({
      success:false,
      message:"something wrong"
    })
  }

}

export default app;
