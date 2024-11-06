const animeControllers = require('../data/dataAnime.js')
const fs = require('fs')

const index  = (req, res)=>{
    res.json({
        data: animeControllers,
        counter: animeControllers.length
    })
}

const show =  (req, res) => {
    const animes = animeControllers.find(anime => anime.id === Number(req.params.id))
    console.log(animes);
    if(!animes){
        return res.status(404).json({
            error:'404 not found'
        })
    }
    return res.status(200).json({
        status: 200,
        data: animes
    })
    
}

const store = (req, res) => {
    const anime = {
        id: Number(animeControllers[animeControllers.length -1].id + 1),
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    }

    animeControllers.push(anime)

    fs.writeFileSync('./data/dataAnime.js', `module.exports=${JSON.stringify(animeControllers, null, 4)}`)
    res.json({
        data: animeControllers
    })
}


module.exports = {
    index,
    show,
    store
}