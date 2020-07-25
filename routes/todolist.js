var express = require('express');
const qb = require('../modules/data/config');
var router = express.Router();
var dateFormat = require('dateformat');
const controller = require('../controller/todo.controller');
const { json } = require('body-parser');
 
//Gọi Function GetALL
router.get('/',controller.getAll);

//Gọi Function Insert
router.post('/todolist', controller.insertNewTodo);

//Gọi Function Delete
router.get('/deleteTodo/:id', controller.deleteTodo);




module.exports = router;
