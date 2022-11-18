const express=require('express')
const { get } = require('mongoose')
const router=express.Router()

const {getAllProducts,getAllProductsStatic}=require('../controllers/products')

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports=router