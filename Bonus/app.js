const express = require('express')
const app = express()
const HOST = 'http://127.0.0.1'
const PORT = 3004
const animeRouter = require('./routers/routerAnime.js')
app.use(express.json())
app.listen(3004 , () =>{
    console.log(`this server is on in${HOST}:${PORT}`);
    
})

app.get('/', (req, res)=>{
    res.send('ciao')
})


app.use('/anime', animeRouter)




