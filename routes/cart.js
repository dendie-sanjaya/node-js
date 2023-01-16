var express = require('express');
var router = express.Router();
const validator = require('fastest-validator');
const v = new validator();
const { Users,Order,OrderDetail } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify = require('../middleware/verify');

/* POST Save Cart. */
router.post('/save/:user_id', async function (req, res, next) {
  try {
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let date_now = (year + "-" + month + "-" + date);
    let orderDetail = '';
    const orderCreate = await Order.create({
      user_id: req.params.user_id,
      order_date: date_now
    });

    if(orderCreate) {
      let data = req.body;
      for(var att in data){
        orderDetail = await OrderDetail.create({
          order_id: orderCreate.id,
          qty: data[att].qty,
          price: data[att].price,
          product_name: data[att].name,
          product_id: data[att].id
        });
      }  
    }

    return res.status(200).json({
      status:200,
      message_oder: orderCreate,
      message_oder_detail: orderDetail 
    });
    
  } catch(e) {
    return res.status(500).json({
      status:500,
      message: e.message
    });
  }  
});

router.get('/',  async function(req, res){
  try {
    return res.status(200).json({
      status:200,
      message: "Cart"
    })  
  } catch(e) {
      return res.status(500).json({
        status:500,
        message: e.message
      });
    }       
})

module.exports = router;
