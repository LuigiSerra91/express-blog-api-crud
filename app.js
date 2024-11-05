const express = require('express')
const app = express()
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const employeesRouter = require('./routers/router.js')
app.use(express.json())
app.listen(PORT, ()=> {
    console.log(`server started on ${HOST}:${PORT}`);
    
})

app.get('/',(req, res)=> {
    res.send('<h1>il mio blog</h1>')
})

app.use('/post', employeesRouter)