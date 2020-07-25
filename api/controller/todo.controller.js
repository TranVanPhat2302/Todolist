const qb = require('../../modules/data/config');
var dateFormat = require('dateformat');

module.exports.getAll = (req, res , next) =>{
    const sql = "SELECT ID, tdname, date(tddate) as tddate FROM qltodo";
  qb.query(sql, function (err, results) {
    if (err) throw err;
    res.json(results);
  });
}

module.exports.insertNewTodo = (req , res , next) => {
    var date = req.body.fdate; //Gán biến cho dữ liệu lấy từ trang web
  var tname = req.body.fname;
  if (date == "" || tname == "") {
      res.end();
  } else {
    const sql = "INSERT INTO qltodo (tddate,tdname) VALUE (?,?)";
    qb.query(sql, [date, tname], function (err, results) {
    console.log("module.exports.insertNewTodo -> results", results);
      if (err)
        throw err;
      res.json(results);
    })
  };
}

module.exports.deleteTodo = (req,res,next) => {
    let id = req.params.id;
    qb.query('DELETE FROM qltodo WHERE ID =' + id , function (err, result) {
      console.log("id", id);
  
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    });
}

module.exports.editTodo = (req,res,next) => {
  let id = req.params.id;
  let tdate = req.body.fdate;
  let tname = req.body.fname;
  qb.query('UPDATE qltodo SET tddate = "'+tdate+ '", tdname = "'+tname+'" WHERE ID = ' + id, function (err, result) {
    console.log("id", id);

    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
}