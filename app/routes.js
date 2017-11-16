module.exports = function (app , passport){

  // GEt sql library
  var mysql = require('mysql');

  var dbconfig = require('../config/database_2');

  //Create conection with current db configuration
var con = mysql.createPool(dbconfig.connection);
// Make sure to use the correct database
con.query('USE '+ dbconfig.database);

// Get time is the form to upload the images
app.get('/upload', function(req,res){
	con.query('USE '+ dbconfig.database);
	res.render('img.ejs');
});


}
