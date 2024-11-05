const employees = require('../data/data.js')

const index = (req, res)=>{
    res.json({
        data : employees,
        counter: employees.length   
    })
}

const store = (req, res) => {
    const employe = {
        ...req.body
    }
    employees.push(employe)
    res.json({
     data : employees
    })
}

module.exports = {
    index,
    store
}