// const express = require('express')
import express from "express"
const app = express()
// const port = 3000

//parser
app.use(express.json())
app.use(express.text())

app.get('/', (req:Request, res:Response) => {
  // res.send('Hello World!')
  // res.send('Hello programmer!')
  // res.send('Hello developers!')
  res.send('Hello Problem solvers!')
})

app.post("/",(req:Request,res:Response)=>{
  console.log("i m in level2 developer")
  res.send("i m in level2 developer")
  console.log(req.body)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

export default app;