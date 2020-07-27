var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
const controller = require('../controller/todo.controller');



//Gọi Function GetALL
router.get('/',controller.getAll);

//Gọi Function Insert
router.post('/', controller.insertNewTodo)

//Gọi Function Delete
router.delete('/deleteTodo/:id', controller.deleteTodo);

//Gọi Funtion Edit
router.put('/editTodo/:id', controller.editTodo)



module.exports = router;
