var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table3');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "Alexwork12345%",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if(err) throw err;
    console.log("connection ID" + connection.threadId);
    productItem();
})


function productItem(){
    connection.query("SELECT * FROM products", function (err,res) {
        if(err) throw err;
    

var table = new Table ({
    head: ['Id',"Product_name", "Department_name", "Price","Stock_quantity"],
    colWidths:[12,40,30, 10, 20],
    style:{
        head: ['blue'],
        compmact: true}
    });
   for (var i = 0; i < res.length; i++){
       table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
   }
       console.log(table.toString());
   
      });
}
