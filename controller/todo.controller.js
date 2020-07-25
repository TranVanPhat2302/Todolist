const qb = require('../modules/data/config');
var dateFormat = require('dateformat');

module.exports.getAll = (req, res , next) =>{
    const sql = "SELECT ID, tdname, date(tddate) as tddate FROM qltodo";
  qb.query(sql, function (err, results) {
    if (err) throw err;
    res.render('todo', { title: 'To do List', items: results, success: false, dateFormat: dateFormat });
    res.end();
    
  });
}

module.exports.insertNewTodo = (req , res , next) => {
    var date = req.body.fdate;//Gán biến cho dữ liệu lấy từ trang web
  var tname = req.body.fname;
  if (date == "" || tname == "") {
      res.redirect('/');
      res.end();
  } else {
    const sql = "INSERT INTO qltodo (tddate,tdname) VALUE (?,?)";
    const getAllTodos = "SELECT ID ,tdname, date(tddate) as tddate FROM qltodo";

    qb.query(sql, [date, tname], function (err, data) {
      if (err) {
        throw err;
      }
      qb.query(getAllTodos, function (err, results) {
        if (err) throw err;
        res.render('todo', { title: 'To do List', items: results, success: true, dateFormat: dateFormat });
        res.end();
      });

    })
  };
}

module.exports.deleteTodo = (req,res,next) => {
    console.log("req", req);
    let id = req.params.id;
    console.log("id", id);
    const deleteTodo = 'DELETE FROM qltodo WHERE ID = (?)';
    qb.query('DELETE FROM qltodo WHERE ID =' + id , function (err, result) {
      console.log("id", id);
  
      if (err) {
        throw err;
      } else {
        res.redirect('/todolist');
        res.end();
      }
    });
}