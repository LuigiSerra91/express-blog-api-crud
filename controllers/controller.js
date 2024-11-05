const employees = require('../data/data.js')
const fs = require('fs')
const index = (req, res)=>{
    res.json({
        data : employees,
        counter: employees.length   
    })
}
const show = ('/post/:id', (req, res) => {
    const employe = employees.find(employe => employe.id === Number(req.params.id))
    console.log(employe);
    
    
    if(!employe){
      return res.status(404).json({
        error: '404! not found'
      })
    }
    return res.json({
      data: employees
    })
  })


const store = (req, res) => {
    const employe = {
        ...req.body
    }
    employees.push(employe)
    fs.writeFileSync('./data/data.js',`module.exports=${JSON.stringify(employees,null,2)}`)
    res.json({
     data : employees
    })
}

module.exports = {
    index,
    store,
    show
}