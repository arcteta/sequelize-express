const express = require('express');
const { getAllCategory, createNewCategory } = require('../controllers/categoryController');
const router = express.Router()


// api/v1/categories/
// get all product category
router.get('/', getAllCategory)

// create new product category
router.post('/',createNewCategory)

// api/v1/categories/filtered-data
router.get('/filtered-data',(req,res)=>{
    res.send()
})


// api/v1/categories/:categories
router.get('/:categories',(req,res)=>{
    res.send()
})


module.exports = router;