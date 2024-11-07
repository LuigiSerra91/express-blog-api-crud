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
    return res.status(200).json({
      status: 200,
      data: employe
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
    
    
    return res.status(200).json({
       status: 200,
       data: employees[employe]
    })

    
  }

  const destroy = (req, res) => {
    // find the pizza by id
    const employe = employees.find(employe => employe.id === parseInt(req.params.id));
  
    // check if the user is deleting the correct pizza
    if (!employe) {
      return res.status(404).json({ error: "No pizza found with that id" })
    }
  
    // remove the pizza from the menu
    const newemploye = employees.filter((employees) => employees.id !== parseInt(req.params.id));
  
    // update the js file
    fs.writeFileSync('./data/data.js', `module.exports = ${JSON.stringify(newemploye, null, 4)}`)
  
    // return the updated menu item
    res.status(200).json({
      status: 200,
      data: newemploye,
      counter: newemploye.length
    })
  
  }

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}