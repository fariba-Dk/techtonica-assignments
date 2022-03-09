const express = require('express')

const cors = require('cors')
const app = express()
const port = 5000;

app.get('/api', (req, res)=>{
  res.json({message: 'hello from express ----> test'})
})



app.listen(port, ()=>{
  console.log(`server is running in ${port}`)
})

