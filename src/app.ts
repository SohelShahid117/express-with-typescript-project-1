// const express = require('express')
import express, { NextFunction } from "express"
import { hostname } from "os"
// import { userInfo } from "os"
const app = express()
// const port = 3000

//parser
app.use(express.json())
app.use(express.text())

//middleware
const logger = (req:Request, res:Response,next:NextFunction)=>{
  console.log(req.url,req.method,req.hostname)
  next()
}

// app.get('/', (req:Request, res:Response) => {
// app.get('/:userId', (req:Request, res:Response) => {
// app.get('/:userId/:subId', (req:Request, res:Response) => {
// app.get('/', (req:Request, res:Response) => {
app.get('/',logger, (req:Request, res:Response) => {
  // console.log(req.params)
  // console.log(req.query)
  console.log(req.query.name,req.query.email)
  // res.send('Hello World!')
  // res.send('Hello programmer!')
  // res.send('Hello developers!')
  res.send('Hello Problem solvers!')
})

app.post("/",logger,(req:Request,res:Response)=>{
  console.log("i m in level2 developer")
  res.send("i m in level2 developer")
  console.log(req.body)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

export default app;