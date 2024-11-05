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
        id: employees[employees.length -1].id + 1,
        name: req.body.name,
        occupation: req.body.occupation,
       

    }
    employees.push(employe)
    fs.writeFileSync('./data/data.js',`module.exports=${JSON.stringify(employees,null,2)}`)
    res.json({
     data : employees
    })
}

const update = (req, res) => {
    const employe = employees.findIndex(employe => employe.id === Number(req.params.id))
    
    if(!employe){
        return res.status(404).json({
          error: '404! not found'
        })
      }
        employees[employe] = {
        ...employees[employe],
        name: req.body.name,
        occupation: req.body.occupation,
   }
     
     
    fs.writeFileSync('./data/data.js',`module.exports=${JSON.stringify(employees,null,2)}`)
    
    
    return res.json({
       data: employees[employe]
    })

    
  }

module.exports = {
    index,
    store,
    show,
    update
}