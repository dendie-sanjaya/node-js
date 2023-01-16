const express = require('express');
const router = express.Router();
const { Products } = require("../models")
const validator = require("fastest-validator");
const v = new validator();
const verify = require('../middleware/verify');

//router.get("/", verify, async function(req,res,next){
router.get("/",  async function(req,res,next){
// res.send("Belajar Node Js");
    let products = await Products.findAll();
    return res.json({
        status: 200,
        message: "Success Show Products",
        data: products
    })
});

//router.get('/:id', verify, async function(req, res){
router.get('/:id',  async function(req, res){
    const id = req.params.id;
    let products = await Products.findByPk(id);
    if(!products){
        return res.status(404).json({
            status:404,
            message: "Products Not Found"
        })
    }

    return res.json({
        status: 200,
        message: "Success Show Products",
        data: products
    })
})

router.post("/create", verify, async function(req,res,next){
    const schema = {
        name: "string",
        price: "number",
        image: "string|optional"
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(422).json(validate);
    }

    const products = await Products.create(req.body);
    return res.json({
        status: 201,
        message: "Success Create Products",
        data: products
    })
})

router.put('/edit/:id', verify, async function(req, res){
    const id = req.params.id;
    let products = await Products.findByPk(id);
    if(!products){
        return res.status(404).json({
            status:404,
            message: "Products Not Found"
        })
    }

    const schema = {
        name: "string",
        price: "number",
        image: "string|optional"
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(422).json(validate);
    }

    products = await products.update(req.body);

    return res.json({
        status: 200,
        message: "Success Update Products",
        data: products
    })
})


router.delete('/delete/:id', verify, async function(req, res){
    const id = req.params.id;
    let products = await Products.findByPk(id);
    if(!products){
        return res.status(404).json({
            status:404,
            message: "Products Not Found"
        })
    }

    products = await products.destroy();

    return res.json({
        status: 200,
        message: "Success Delete Products"
    })
})

module.exports = router;